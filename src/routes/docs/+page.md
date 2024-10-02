        # RowdyByte Documentation




    ## Setup Development Environment
    RowdyByte is created with Sveltekit. Sveltekit is a modern meta framework and it's easy to use. Sveltekit is a fullstack framework providing state management, reactivity, routing & animations out of the box.

    <br>

    We can create a new Sveltekit project with Vite. Vite is a modern javascript bundler. The Vite development server comes with Hot Module Replacement (HMR). Wich greatly improves development experience (DX).

    <br>

    ##### create new Sveltkit project with pnpm:

    ```bash
    pnpm create vite@latest



    <script lang="ts">
    import { page } from '$app/stores';

    let pathname = $state();

    $effect(() => {
    	pathname = $page.url.pathname;
    });

    </script>

    <nav>
        <a href="/">home</a>
        <p class={pathname === '/' ? 'homePath' : pathname === '/docs' ? 'docsPath' : ''}>⚧</p>
        <a href="/docs">docs</a>
    </nav>
