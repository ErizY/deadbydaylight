const fs = require('fs');
const puppeteer = require('puppeteer');

(async ()=>{
  const out = [];
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();

  page.on('console', msg => {
    out.push({type:'console', text: msg.text()});
    console.log('PAGE LOG:', msg.type(), msg.text());
  });
  page.on('pageerror', err => {
    out.push({type:'pageerror', text: err.message});
    console.log('PAGE ERROR:', err.message);
  });
  page.on('requestfailed', req => {
    out.push({type:'requestfailed', url: req.url(), statusText: req.failure().errorText});
    console.log('REQUEST FAILED:', req.url(), req.failure().errorText);
  });

  const url = 'https://ErizY.github.io/deadbydaylight/';
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

  // Wait a bit
  await new Promise(r => setTimeout(r, 1000));

  // Try clicking several buttons and interacting
  const selectors = ['#sync-button', '#randomize', '#randomize-killer', '#randomize-survivor', '.cta', '#search'];

  for (const sel of selectors) {
    try {
      if (sel === '#search') {
        await page.focus(sel);
        await page.keyboard.type('Trapper');
        await page.waitForTimeout(300);
      } else {
        const el = await page.$(sel);
        if (el) {
          await el.click();
          await new Promise(r => setTimeout(r, 500));
        } else {
          out.push({type:'missing', selector: sel});
          console.log('MISSING ELEMENT:', sel);
        }
      }
    } catch (e) {
      out.push({type:'click-error', selector: sel, message: e.message});
      console.log('CLICK ERROR', sel, e.message);
    }
  }

  // Dump some DOM states
  const syncStatus = await page.$eval('#sync-status', el => el.textContent).catch(()=>null);
  out.push({type:'dom', selector:'#sync-status', text: syncStatus});
  const killerCount = await page.$$eval('.killer-card', els => els.length).catch(()=>null);
  out.push({type:'dom', selector:'.killer-card', count: killerCount});

  // Save to file
  fs.writeFileSync('scripts/console_output.json', JSON.stringify(out, null, 2));
  console.log('Wrote scripts/console_output.json');

  await browser.close();
})();