import type { PageLoad } from '../$types';

type Article = {
    slug: string;
    component: unknown;
};

export const load: PageLoad = async () => {
    const articles: { slug: string; component: unknown }[] = [];



    const paths = import.meta.glob('../docs/*.md', { eager: true });

    for (const path in paths) {
        const file = paths[path] as object;
        const slug = path.split('/').at(-1)?.replace(/[.-]/g, ' ').replace('md', '').trim();

        if (file && 'default' in file && slug) {
            const component = file.default;
            const article: Article = { slug, component };
            articles.push(article);
        }
        console.log(articles)
    }

    return { articles };
};
