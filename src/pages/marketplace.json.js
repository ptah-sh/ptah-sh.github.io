import { getCollection, getEntry } from 'astro:content';

export async function GET() {
    const categories = await getCollection('marketplace', entry => !entry.id.includes('/'));

    const counts = {};
    for (const category of categories) {
        const templates = await getCollection('marketplace', entry => entry.id.startsWith(category.id) && entry.id.includes('/'));

        counts[category.id] = templates.length;
    }

    return new Response(JSON.stringify(categories.map(category => {
        return {
            name: category.data.name,
            slug: category.id,
            description: category.data.description,
            apps: counts[category.id]
        }
    })), {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
