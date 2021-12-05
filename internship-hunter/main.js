const puppeteer = require('puppeteer-extra');
const settings = require('./settings.json')
const fs = require('fs');
const { promisify } = require('util')
const writeFileAsync = promisify(fs.writeFile)


// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

// puppeteer usage as normal
(async () => {
    const browser = await puppeteer.launch({ headless: false });
    for(keyword of settings.keywords) {
        const page = await browser.newPage();
        await page.goto(`https://internshala.com/internships/keywords-${keyword}`)
        await page.click('#close_popup')
        let data = await page.evaluate(() => {
            return document.getElementById('internship_list_container').innerHTML;
        })
        data = data.split("\n").filter(datum => datum.includes('<a href')).map(dat => {
            dat = dat.split(">")[0].trim()
            return dat.slice(9, dat.length - 1);
        })
        const store = require('./store.json');
        data = data.filter((datum) => !store[datum])
        data.map(datum => {
            store[datum] = 1;
        })
        const json = JSON.stringify(store);
        await writeFileAsync('store.json', json, 'utf8');
        console.log(data)
        await wait(5000000)
    }
    await browser.close()
})();

const wait = async (ms) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res();
        }, ms);
    })
}