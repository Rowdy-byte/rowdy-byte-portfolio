import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ depends, locals: { supabase } }) => {
    depends('supabase:db:posts')
    const { data: posts } = await supabase.from('posts').select('id.post').order('id')

    return {
        posts: posts ?? []
    }
};