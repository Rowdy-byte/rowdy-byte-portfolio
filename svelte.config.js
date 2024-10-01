import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex'
import { createHighlighter } from 'shiki';

const themes = ['poimandres', 'material-theme-palenight', 'andromeeda', 'aurora-x', 'catppuccin-frappe']

const theme = themes[0];
const highlighter = await createHighlighter({
	themes: [theme],
	langs: ['javascript', 'typescript']
});

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme }));
			return `{@html \`${html}\` }`;
		}
	},
}


/** @type {import('@sveltejs/kit').Config} */
const config = {

	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	extensions: ['.svelte', '.md'],

	kit: {

		adapter: adapter()
	}
};

export default config;
