    ## Sveltekit

    RowdyByte is built with SvelteKit. SvelteKit is a modern meta-framework that is user-friendly and versatile. It provides a full-stack solution with state management, reactivity, routing, and animations right out of the box.

    <br>
    <br>


    ## Vite

    I created a new SvelteKit project using Vite. Vite is a modern JavaScript bundler that enhances the development experience. The Vite development server features Hot Module Replacement (HMR), which significantly improves the development workflow.

    <br>
    <br>

    ## Performant Node Package Manager

    I have chosen pnpm as my package manager instead of npm. This choice allows for a notably faster installation process, as pnpm avoids redundant downloads by reusing previously installed packages.

    <br>

```bash
pnpm create vite@latest
```

    <br>

    After executing the command, I selected the SvelteKit barebones skeleton project with TypeScript, Prettier, and ESLint. JavaScript is a dynamically typed language, allowing data types to be reassigned. TypeScript offers type safety and autocompletion, enhancing code quality. Prettier is employed for code formatting, while ESLint is utilized for code linting.

    <br>

```bash
cd rowdy-byte-portfolio
```

    <br>

```bash
cd pnpm i
```

    <br>
    <br>


    ## Github

    Following a successful installation, I will create a new GitHub repository.

    <br>

    ###### create new repository

```bash
git init
```

    <br>

    Then I have established a main branch and a development branch. New features are initially developed on the development branch. Once everything is confirmed to be functioning correctly, I will merge the branches.

    <br>
    <br>


     ## Tailwind

    I considered using Tailwind CSS for styling due to its utility-first approach, which facilitates rapid UI development. Tailwind allows me to create custom designs directly within my HTML, enhancing productivity and efficiency. It also provides a responsive design system that is highly customizable.

    <br>

```svelte
<!-- utility class -->

<p class="max-w-lg scale-0 font-normal text-slate-100 text-xs">
	{projectsText.toUpperCase()}
</p>
```

    <br>

    Next, I installed MDsveX to enable the use of Svelte components within markdown files. Additionally, I installed Shiki for syntax highlighting. I imported the createHighlighter function from Shiki and provided an object as an argument containing the desired themes and language properties.

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
