import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const envFiles = [
  '.env',
  '.env.production',
  '.env.local',
  '.env.production.local',
];

const loadEnvFile = (fileName) => {
  const filePath = join(process.cwd(), fileName);

  if (!existsSync(filePath)) {
    return;
  }

  const contents = readFileSync(filePath, 'utf8');

  for (const line of contents.split(/\r?\n/)) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith('#')) {
      continue;
    }

    const separatorIndex = trimmed.indexOf('=');

    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    const rawValue = trimmed.slice(separatorIndex + 1).trim();
    const normalizedValue = rawValue.replace(/^['"]|['"]$/g, '');

    process.env[key] = normalizedValue;
  }
};

envFiles.forEach(loadEnvFile);

const fallbackSiteUrl = 'https://example.com';
const siteUrl = (process.env.VITE_SITE_URL || fallbackSiteUrl).replace(/\/$/, '');
const publicDir = join(process.cwd(), 'public');

if (!process.env.VITE_SITE_URL) {
  console.warn(
    `VITE_SITE_URL is not set. Falling back to ${fallbackSiteUrl} for robots.txt and sitemap.xml.`
  );
}

const sitemapEntries = [
  {
    loc: `${siteUrl}/`,
    changefreq: 'weekly',
    priority: '1.0',
  },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries
  .map(
    ({ loc, changefreq, priority }) => `  <url>
    <loc>${loc}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

mkdirSync(publicDir, { recursive: true });
writeFileSync(join(publicDir, 'sitemap.xml'), sitemap, 'utf8');
writeFileSync(join(publicDir, 'robots.txt'), robots, 'utf8');
