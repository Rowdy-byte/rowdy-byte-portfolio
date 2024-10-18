import type { PageServerLoad, Actions } from "./$types";


export const load: PageServerLoad = async ({ depends, locals: { supabase } }) => {
    depends('supabase:db:posts')
    const { data: posts } = await supabase.from('posts').select('id.post').order('id')

    return {
        posts: posts ?? []
    }
};

export const actions: Actions = {
    createSnObj: async ({ request }) => {
        const data = await request.formData()
        const serialnumbers = data.get('serialnumbers')?.toString().split(/\s+/)
        const filename = data.get('filename')
        const createdAt = data.get('createdAt')

        console.log(data)
        console.log(serialnumbers, filename, createdAt)
    }


};