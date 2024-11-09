import { getCollection } from 'astro:content';
import type { GetStaticPaths } from "astro";

export const getStaticPaths =  (async () => {
    const categories = await getCollection('marketplace', entry => !entry.id.includes('/'));

    return categories.map(category => ({
        params: {
            category: category.id,
        }
    }));
}) satisfies GetStaticPaths;

export async function GET({ params }: any) {
        const apps = await getCollection('marketplace', entry => entry.id.startsWith(params.category) && entry.id.includes('/'));

    return new Response(JSON.stringify(apps.map(app => {
        return {
            name: app.data.name,
            slug: app.id,
            description: app.data.description,
            processes: app.data.processes.map(p => {
                return {
                    name: p.name,
                    description: p.description,
                    source: p.data.source,
                    url: p.url,
                }
            }),
        }
    })), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
