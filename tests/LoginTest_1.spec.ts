
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageObjects/LoginPage';
//summa
test('1_Login Tests01', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    await page.waitForLoadState("networkidle");
    await loginPage.goto();
    await loginPage.login('anshika@gmail.com', 'Iamking@000');
    const link = await page.getByRole('link', { name: 'Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire' });
    await expect(link).toBeVisible();
});

test('1_Login Tests02', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    await page.waitForLoadState("networkidle");
    await loginPage.goto();
    await loginPage.login('anshika@gmail.com', 'Iamking@000');
    const link = await page.getByRole('link', { name: 'Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire' });
    await expect(link).toBeVisible();
});

test('1_Login Tests03', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    await page.waitForLoadState("networkidle");
    await loginPage.goto();
    await loginPage.login('anshika@gmail.com', 'Iamking@000');
    const link = await page.getByRole('link', { name: 'Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire' });
    await expect(link).toBeVisible();
});

test('1_Login Tests04', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    await page.waitForLoadState("networkidle");
    await loginPage.goto();
    await loginPage.login('anshika@gmail.com', 'Iamking@000');
    const link = await page.getByRole('link', { name: 'Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire' });
    await expect(link).toBeVisible();
});

test('1_Login Tests05', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    await page.waitForLoadState("networkidle");
    await loginPage.goto();
    await loginPage.login('anshika@gmail.com', 'Iamking@000');
    const link = await page.getByRole('link', { name: 'Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire' });
    await expect(link).toBeVisible();
});