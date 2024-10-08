export async function load({ params }) {

    const article = await import(`../${params.slug}.md`)

    return {
        content: article.default,
        meta: article.metadata
    }
}
