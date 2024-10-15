import type { LayoutLoad } from './$types';

import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public'

import { createBrowserClient, createServerClient, isBrowser } from '@supabase/ssr'

type Article = {
    slug: string;

};

export const load: LayoutLoad = async ({ fetch, data, depends }) => {
    depends('supabase:auth')

    const supabase = isBrowser()
        ? createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
            global: {
                fetch,
            },
        })
        : createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
            global: {
                fetch,
            },
            cookies: {
                getAll() {
                    return data.cookies
                },
            },
        })

    /**
     * It's fine to use `getSession` here, because on the client, `getSession` is
     * safe, and on the server, it reads `session` from the `LayoutData`, which
     * safely checked the session using `safeGetSession`.
     */
    const {
        data: { session },
    } = await supabase.auth.getSession()


    const headers: { slug: string }[] = [];

    const path = import.meta.glob('./docs/*.md', { eager: true });

    for (const header in path) {
        const file = path[header] as object;
        const slug = header.split('/').at(-1)?.replace(/[.-]/g, ' ').replace('md', '').trim();

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<Article, 'slug'>;
            const article: Article = { ...metadata, slug };
            headers.push(article);
        }
    }

    return { headers, supabase, session };
};

