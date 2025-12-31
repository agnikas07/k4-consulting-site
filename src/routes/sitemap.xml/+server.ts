export async function GET() {
    const site = 'https://www.kilo4consulting.com';
    const pages = [
        '',
        '/about',
        '/services',
        '/candidate',
        '/contact'
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset
        xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
    >
        ${pages.map(page => `
        <url>
        <loc>${site}${page}</loc>
        <changefreq>weekly</changefreq>
        <priority>${page === '' ? 1.0 : 0.8}</priority>
        </url>
        `).join('')}
    </urlset>`;

    return new Response(sitemap, {
        headers: {
        'Content-Type': 'application/xml',
        },
    });
}