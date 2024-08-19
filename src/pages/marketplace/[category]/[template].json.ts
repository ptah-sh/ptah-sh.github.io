import type { GetStaticPaths } from "astro";
import { getCollection, getEntry } from 'astro:content';


export const getStaticPaths = (async () => {
    const apps = await getCollection('marketplace', entry => entry.id.includes('/'));

    return apps.map(app => {
        const [category, template] = app.id.split('/');

        return {
            params: {
                category,
                template,
            }
        }
    });
}) satisfies GetStaticPaths;

export async function GET({ params }: any) {
    const app = await getEntry('marketplace', `${params.category}/${params.template}`);

    return new Response(JSON.stringify({
        slug: app.id,
        ...app.data,
    }), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
