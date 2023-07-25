const data = [
    { params: { slug: '' }},
    { params: { slug: 'teenused' }},
    { params: { slug: 'projektid' }},
    { params: { slug: 'meist' }},
    { params: { slug: 'tehnika' }},
    { params: { slug: 'kontakt' }},
    { params: { slug: 'projektid/kakumae-sadam' }},
    { params: { slug: 'projektid/module-tech' }},
    { params: { slug: 'projektid/eesti-traat' }},
    { params: { slug: 'projektid/favor' }},
    { params: { slug: 'projektid/r13' }},
    { params: { slug: 'en' }},
    { params: { slug: 'en/teenused' }},
    { params: { slug: 'en/projektid' }},
    { params: { slug: 'en/meist' }},
    { params: { slug: 'en/tehnika' }},
    { params: { slug: 'en/kontakt' }},
    { params: { slug: 'en/projektid/kakumae-sadam' }},
    { params: { slug: 'en/projektid/module-tech' }},
    { params: { slug: 'en/projektid/eesti-traat' }},
    { params: { slug: 'en/projektid/favor' }},
    { params: { slug: 'en/projektid/r13' }}

];

export default (req, res) => {
    res.setHeader('Content-Type', 'text/xml');
    res.write(createSitemap(data));
    res.end();
};

const createSitemap = (data) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${data
    .map(({ params: { slug } }) => {
        return `
        <url>
          <loc>${`https://www.filsi.ee/${slug}`}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>daily</changefreq>
          <priority>1.0</priority>
        </url>
      `;
    })
    .join('')}
</urlset>
`;
