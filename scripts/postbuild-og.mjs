// Run after `vite build`. Crawlers (LinkedIn) do not run JavaScript, so /checklist needs its own meta tags in static HTML.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
const site = (process.env.SITE_URL || '').replace(/\/$/, '');
if (!site) { console.warn('SITE_URL not set, skipping OG page'); process.exit(0); }
let html = readFileSync('dist/index.html', 'utf8');
const t = 'The Business Automation Opportunity Checklist | TechGeek';
const d = 'A free 7-page guide to spot repetitive work, score one workflow and decide what to improve first.';
const tags = `<meta property="og:type" content="website"><meta property="og:title" content="${t}"><meta property="og:description" content="${d}"><meta property="og:image" content="${site}/og-checklist.png"><meta property="og:url" content="${site}/checklist"><meta name="twitter:card" content="summary_large_image">`;
html = html.replace(/<title>.*?<\/title>/s, `<title>${t}</title>`).replace('</head>', `${tags}</head>`);
mkdirSync('dist/checklist', { recursive: true });
writeFileSync('dist/checklist/index.html', html);
