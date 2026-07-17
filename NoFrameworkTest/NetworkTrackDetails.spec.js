const { test,expect } = require('@playwright/test');
 
 
test('@QW Security test request intercept', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/client");
    await page.on('request', request => console.log(request.url()));
    await page.on('response', response => console.log(response.url(), response.status()));
    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").fill("Iamking@000");
    await page.locator("[value='Login']").click();
    await page.pause();
})