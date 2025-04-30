const fs = require('fs');
const path = require('path');

// Load your JSON data
const data = require('../data/posts.json'); // Replace with actual path if needed

const baseUrl = 'https://ityulkanov.github.io/1917_history/'; // Change to your actual domain
const outputPath = path.join(__dirname, '../sitemap.xml');

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

data.forEach(post => {
  sitemap += `  <url>\n`;
  sitemap += `    <loc>${baseUrl}/${post.slug}.html</loc>\n`;
  sitemap += `    <lastmod>${new Date(post.date).toISOString().split('T')[0]}</lastmod>\n`;
  sitemap += `    <changefreq>monthly</changefreq>\n`;
  sitemap += `    <priority>0.8</priority>\n`;
  sitemap += `  </url>\n`;
});

sitemap += `</urlset>`;

// Write to sitemap.xml
fs.writeFileSync(outputPath, sitemap, 'utf8');
console.log(`✅ Sitemap generated with ${data.length} entries.`);
