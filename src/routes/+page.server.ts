import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
    const { data: posts } = await supabase.from('posts').select('title').limit(5).order('id')
    return { posts: posts ?? [] }
}