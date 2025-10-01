import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const hostname = 'https://edhop.in'; // TODO: Replace with your actual domain
const routes = [
  '/',
  '/about',
  '/courses',
  '/admissions',
  '/btech-credit-transfer',
  '/contact',
  '/check-eligibility',
  '/admin'
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname });
  routes.forEach(route => sitemap.write({ url: route, changefreq: 'weekly', priority: 0.7 }));
  sitemap.end();
  const data = await streamToPromise(sitemap);
  createWriteStream('./dist/sitemap.xml').write(data);
  console.log('sitemap.xml generated in dist/');
}

generateSitemap();