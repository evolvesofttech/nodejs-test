const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
const hooksXpath = "(//a[@href='/reference/react/hooks'])[1]";
const componentsXpath = "(//a[@href='/reference/react/components'])[1]";
const apisXpath = "(//a[@href='/reference/react/apis'])[1]";

module.exports = {
    runFunction: async () => {
        console.log("Inside run function...");
        let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
        try {
            await driver.get('https://react.dev/reference/react');
            await driver.manage().window().maximize();
            await driver.sleep(5000);
            for (let i = 0; i < 500; i++) {
                await driver.wait(until.elementLocated(By.xpath(hooksXpath)), 5000).then(async (el) => {
                    console.log('==== waitUntillElementVisible success ====');
                    await driver.executeScript("arguments[0].click();", el);
                    await driver.sleep(15000);
                }).catch(error => {
                    console.log('waitUntillElementVisible ERROR: ', error);
                })
                await driver.wait(until.elementLocated(By.xpath(componentsXpath)), 5000).then(async (el) => {
                    console.log('==== waitUntillElementVisible success ====');
                    await driver.executeScript("arguments[0].click();", el);
                    await driver.sleep(15000);
                }).catch(error => {
                    console.log('waitUntillElementVisible ERROR: ', error);
                })
                await driver.wait(until.elementLocated(By.xpath(apisXpath)), 5000).then(async (el) => {
                    console.log('==== waitUntillElementVisible success ====');
                    await driver.executeScript("arguments[0].click();", el);
                    await driver.sleep(15000);
                }).catch(error => {
                    console.log('waitUntillElementVisible ERROR: ', error);
                })
            }
        } finally {
            await driver.quit();
        }
    }
}