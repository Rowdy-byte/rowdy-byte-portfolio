import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex'
import { createHighlighter } from 'shiki';
import { remarkHeaders } from './remark-headers.js'
// import remarkToc from 'remark-toc';

/** Initialiseer Shiki highlighter buiten de async scope */
let highlighter;

(async () => {
	const theme = 'poimandres';
	highlighter = await createHighlighter({
		themes: [theme],
		langs: ['javascript', 'typescript', 'svelte', 'css', 'scss', 'html', 'bash']
	});
})();

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	remarkPlugins: [remarkHeaders],
	highlight: {
		highlighter: (code, lang = 'text') => {
			if (!highlighter) return escapeSvelte(code);  // Fallback als de highlighter nog niet is geladen
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'poimandres' }));
			return `
				<pre class="shiki ${lang}"><code>{@html \`${html}\`}</code>
					<button class="copy-button ${lang}">copy</button>
				</pre>
				`;
		}
	},
}

/** @type {import('@sveltejs/kit').Config} */
const config = {

	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	extensions: ['.svelte', '.md'],

	kit: {
		adapter: adapter(),
	}
};

export default config;
