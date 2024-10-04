import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex'
import { createHighlighter } from 'shiki';
import { remarkHeaders } from './remark-headers.js'

import remarkToc from 'remark-toc';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	remarkPlugins: [remarkHeaders],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await createHighlighter({
				themes: ['poimandres'],
				langs: ['javascript', 'typescript', 'svelte', 'css', 'scss', 'html', 'bash']
			});

			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'poimandres' }));

			return /* html */`
					<code>
						<button class="copy-button">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>
						</button>		
							${html}
					</code>	
			`;
		}
	}
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
