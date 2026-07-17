const { test,expect } = require('@playwright/test');
 
 
test('@QW Security test request intercept', async ({ page }) => {
 
    //login and reach orders page
    await page.goto("https://rahulshettyacademy.com/client");
    await page.route("**/*.{css,img,jpeg,png}", route => route.abort());
    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").fill("Iamking@000");
    await page.locator("[value='Login']").click();
    await page.pause();
 
 
 
 
 
 
 
 
})