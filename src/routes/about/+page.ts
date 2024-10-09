export async function load() {

    const article = await import('./about-me.md')

    return {
        content: article.default,
        meta: article.metadata,

    }
}