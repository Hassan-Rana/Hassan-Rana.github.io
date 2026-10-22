import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

/**
 * Works out the public address of the site, used for canonical links,
 * Open Graph tags, sitemap.xml and robots.txt.
 *
 * Priority: SITE_URL (set it yourself) → URL (set automatically by Netlify)
 * → a placeholder that you should replace before sharing the site.
 */
function resolveSiteUrl(env: Record<string, string>): string {
  const raw = env.SITE_URL || process.env.SITE_URL || process.env.URL || '';
  if (!raw) {
    console.warn(
      '\n[site-seo] SITE_URL is not set — using https://example.com in sitemap and social tags.\n' +
        '           Set SITE_URL in your hosting dashboard (see README → Deployment).\n',
    );
    return 'https://example.com';
  }
  return raw.replace(/\/+$/, '');
}

/** Injects the site URL into index.html and writes sitemap.xml + robots.txt. */
function siteSeo(siteUrl: string): Plugin {
  return {
    name: 'site-seo',
    transformIndexHtml: {
      order: 'pre',
      handler: (html) => html.replaceAll('__SITE_URL__', siteUrl),
    },
    generateBundle() {
      const today = new Date().toISOString().slice(0, 10);
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`,
      });
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const siteUrl = resolveSiteUrl(env);

  return {
    plugins: [react(), tailwindcss(), siteSeo(siteUrl)],
    build: {
      target: 'es2020',
      cssMinify: true,
    },
  };
});
