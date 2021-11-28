const puppeteer = require('puppeteer-extra');

const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

(async () => {
  const browser = await puppeteer.launch({
    //   headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://chegg-experts.us.auth0.com/login?state=hKFo2SB1bkkzeGNjbTAtM0hJUjU3bGtZY1ZjZlgyWmdnMWpJeaFupWxvZ2luo3RpZNkgOXF0Y2hJN19KLWxyNUFUWlFSQWgzMGJIVFlwRnBaRVGjY2lk2SA0ZXBLRnVXZm9MQ0RLMlhWWk9iTGxWaWRGOUFKTVI4QQ&client=4epKFuWfoLCDK2XVZObLlVidF9AJMR8A&protocol=oauth2&audience=https%3A%2F%2Fchegg-experts.us.auth0.com%2Fapi%2Fv2%2F&scope=openid%20profile%20email%20offline_access&redirect_uri=https%3A%2F%2Fexpert.chegg.com%2F&response_type=code&response_mode=query&nonce=QlB5dTh1UmZ%2BSlFlTmt0TGRpaUNaY0dGZn5NaDRYQjFIQ0hFYS0zQWY4Uw%3D%3D&code_challenge=JXRzsJGAvtr1H3D1WEJfs4AbP8Fbxaok--k8VsLY5io&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtcmVhY3QiLCJ2ZXJzaW9uIjoiMS4zLjAifQ%3D%3D');
  console.log('Logging in...')
  await wait(5000);
  await page.click('div.auth0-lock-input-email  input.auth0-lock-input');
  await page.keyboard.type('backd00r257@gmail.com', {delay: 100});
  await page.click('#auth0-lock-container-1 > div > div.auth0-lock-center > form > div > div > div > div > div.auth0-lock-content-body-wrapper > div:nth-child(2) > span > div > div > div > div > div > div > div > div > div > div > div.auth0-lock-input-block.auth0-lock-input-show-password > div.auth0-lock-input-block.auth0-lock-input-password > div > input')
  await page.keyboard.type('Chegg11@11qa')
  await page.click('#auth0-lock-container-1 > div > div.auth0-lock-center > form > div > div > div > button')
  await wait(5000);
  await page.goto('https://expert.chegg.com/home');
  await wait(5000);
  await page.click('#root > main > div > div.sc-ipXKqB.dNWZjS > div.sc-hmXxxW.cRnTbE > div > div.sc-ivVeuv.kCPrPA > div > div > div > div > div > button > span > span.sc-1eq90u-1.ebPufV');
  await wait(5000);
  if(await page.url() === 'https://expert.chegg.com/home') await page.click('#root > main > div > div.sc-ipXKqB.dNWZjS > div.sc-hmXxxW.cRnTbE > div > div.sc-ivVeuv.kCPrPA > div > div > div > div > div > button > span > span.sc-1eq90u-1.ebPufV');
  while(true) {
    console.log('fetching new question...')
    const element = await page.$('body main div');
    const content = await page.evaluate(el => el.textContent, element);
    await wait(30000);
    if(!content.toLowerCase().includes('python')) {
        console.log('Not python, skipping.')
        await page.click('#root > main > footer > div > div > div:nth-child(2) > button > span > span.sc-1eq90u-1.fiQEjm');
        await page.click('#no-knowledge');
        await wait(2000);
        await page.click('#skip-modal > div > div.sc-1ia47o9-8.ivVfpa > div > button > span > span.sc-1eq90u-1.ebPufV');
    }
    else {
        console.log('Question found. Locking.')
        //figure this logic out
        // sender('chegg-bot-python');
        await page.click('#root > main > footer > div > div > div:nth-child(1) > button > span > span.sc-1eq90u-1.fiQEjm')
        await wait(7200000);
    }
    await wait(5000);
  }

  await browser.close();
})();


async function wait(ms) {
    return new Promise((resolve, rej) => {
        setTimeout(() => {
            resolve();
        },ms);
    });
}