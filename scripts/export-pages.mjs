import { readFile, writeFile, mkdir, cp } from 'node:fs/promises';
import { resolve } from 'node:path';
const root = process.cwd();
const target = resolve(root, 'docs');
await mkdir(target, { recursive: true });
const body = await readFile(resolve(root, 'app/homepage.html'), 'utf8');
if (body.includes('{{ABSTRACT}}')) throw new Error('Abstract has not been populated');
const title = 'GuidedNav: Shaping Vision-Language Navigation Representations through Pre-Action Attention and Spatial Guidance';
const description = 'GuidedNav shapes navigation representations with subtask attention, landmark grounding, and spatial guidance. Explore the method, datasets, results, and robot demonstrations.';
const url = 'https://jingyu198.github.io/GuidedNav/';
let preview = '';
try { await readFile(resolve(root, 'public/og.png')); preview = `<meta property="og:image" content="${url}og.png"><meta name="twitter:image" content="${url}og.png">`; } catch {}
const html = `<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="${description}"><title>${title}</title><link rel="canonical" href="${url}"><meta property="og:title" content="${title}"><meta property="og:description" content="${description}"><meta property="og:url" content="${url}"><meta property="og:type" content="website"><meta name="twitter:card" content="summary_large_image">${preview}<meta name="theme-color" content="#137f88"><link rel="stylesheet" href="./site.css"><script src="./interaction.js" defer></script></head><body>${body}</body></html>\n`;
await writeFile(resolve(target, 'index.html'), html);
await writeFile(resolve(target, 'site.css'), await readFile(resolve(root, 'app/globals.css')));
await cp(resolve(root, 'public'), target, { recursive: true });
await writeFile(resolve(target, '.nojekyll'), '');
console.log('GitHub Pages output written to docs/');
