        # RowdyByte Documentation




    ## Setup Development Environment
    RowdyByte is created with Sveltekit. Sveltekit is a modern meta framework and it's easy to use. Sveltekit is a fullstack framework providing state management, reactivity, routing & animations out of the box.

    <br>

    I created a new Sveltekit project with Vite. Vite is a modern javascript bundler. The Vite development server comes with Hot Module Replacement (HMR). Wich greatly improves development experience (DX).

    <br>

    ###### create new Sveltkit project with pnpm

```bash
pnpm create vite@latest
```

    <br>

    Instead of npm is used pnpm as my package manager. Pnpm is much quicker since it doesn't have to download all packages. Pnpm reuses some packages.

    <br>

    After running the command I choose the Sveltekit barebones skeleton project with Typescript, Prettier & Eslint. Javascript is an dynamic typed language and data types can be reassigned. Typescript is giving me type safety and autocompletion. Pretties for code formatting & Eslint for code linting.

    <br>

    After successfull installation I will create a new Github repository.

    <br>

    ###### cd in new project

```bash
cd rowdy-byte-portfolio
```

    <br>

    ###### create new repository

```bash
git init
```

    <br>

    I've created a main branch and a development branch, new features are first created on the development branch. When everything is ok I will merge the branches.

    <br>

    I've chosen Sass over the default emmbedded style tag, because I wanted to experiment with variables, mixins & nesting. Also considerd Tailwind but I think it's a bit mesy. Sveltekit supports Sass out of the box. Only needed to install dependencies to support embedded Scss style tags.

    <br>

```svelte
<!-- embedded style tags -->

<style lang="scss">
	/* styles */
</style>
```

    <br>

    Next, I installed MdsveX so I can use Svelte components in markdown files. Also installed Shiki for syntax highlighting. I imported the createHighlighter function from Shiki and passed a object as an argument with the themes and language property's.

    <br>

```svelte
<!-- svelte.config.js -->

let highlighter;

(async () => {
	const theme = 'poimandres';
	highlighter = await createHighlighter({
		themes: [theme],
		langs: ['javascript', 'typescript', 'svelte', 'css', 'scss', 'html', 'bash']
	});
})();
```