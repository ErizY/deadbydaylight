#!/usr/bin/env node
// Fetch Fandom roster (Killers and Survivors) and write to data/fandom_roster.json
// Usage: node scripts/fetch_fandom_roster.js

const fs = require('fs');
const path = require('path');

async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.json();
}

async function fetchCategory(type) {
  const cat = `Category:${type}`;
  const api = `https://deadbydaylight.fandom.com/api.php?action=query&format=json&list=categorymembers&cmtitle=${encodeURIComponent(cat)}&cmlimit=500`;
  const body = await fetchJSON(api);
  const pages = (body.query && body.query.categorymembers) || [];
  const filtered = pages.filter(p => !p.title.startsWith('Category:')).map(p => p.title);
  const results = [];
  for (const title of filtered) {
    try {
      const q = encodeURIComponent(title.replace(/\s+/g, '_'));
      const imgApi = `https://deadbydaylight.fandom.com/api.php?action=query&format=json&prop=pageimages&piprop=thumbnail&pithumbsize=600&titles=${q}`;
      const b = await fetchJSON(imgApi);
      const page = Object.values(b.query.pages)[0];
      const thumb = page && page.thumbnail && page.thumbnail.source;
      results.push({ name: title, iconURL: thumb || null });
    } catch (e) {
      results.push({ name: title, iconURL: null });
    }
  }
  return results;
}

(async () => {
  try {
    console.log('Fetching Killers roster...');
    const killers = await fetchCategory('Killers');
    console.log(`Fetched ${killers.length} killers.`);
    console.log('Fetching Survivors roster...');
    const survivors = await fetchCategory('Survivors');
    console.log(`Fetched ${survivors.length} survivors.`);
    const out = { timestamp: new Date().toISOString(), killers, survivors };
    const outDir = path.resolve(__dirname, '..', 'data');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'fandom_roster.json'), JSON.stringify(out, null, 2));
    console.log('Wrote data/fandom_roster.json');
  } catch (e) {
    console.error('Failed to fetch roster:', e);
    process.exit(1);
  }
})();
