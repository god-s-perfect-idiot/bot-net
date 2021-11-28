const puppeteer = require('puppeteer-extra');

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

// puppeteer usage as normal
(async () => {
  const browser = await puppeteer.launch({
    headless: false  
  });
  const page = await browser.newPage();
  await page.goto('https://reddit.com');
  console.log(await getHrefs(page));
  await wait(399999);
  await browser.close();
})();

async function getHrefs(page) {
  const urls = await page.$$eval('a', anchors => [].map.call(anchors, a => a.href));
  return urls.filter(url => {
    try {
      return new URL(url).hostname === 'www.reddit.com'
    }
    catch(e) {
      return false;
    }      
  })
}

const wait = async (ms) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res()
    }, ms)
  })
}