import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageObjects/LoginPage';
import { DashboardPage } from '../pageObjects/DashboardPage';

test('1_Dashboard Tests01', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    await page.waitForLoadState("networkidle");
    await loginPage.goto();
    await loginPage.login('anshika@gmail.com', 'Iamking@000');
    const dashboardHeaderText = await dashboardPage.getDashboardHeaderText();
    expect(dashboardHeaderText).toBe(' Home | Search'); 
});

test('1_Dashboard Tests02', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    await page.waitForLoadState("networkidle");
    await loginPage.goto();
    await loginPage.login('anshika@gmail.com', 'Iamking@000');
    const dashboardHeaderText = await dashboardPage.getDashboardHeaderText();
    expect(dashboardHeaderText).toBe(' Home | Search'); 
});

test('1_Dashboard Tests03', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    await page.waitForLoadState("networkidle");
    await loginPage.goto();
    await loginPage.login('anshika@gmail.com', 'Iamking@000');
    const dashboardHeaderText = await dashboardPage.getDashboardHeaderText();
    expect(dashboardHeaderText).toBe(' Home | Search'); 
});

test('1_Dashboard Tests04', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    await page.waitForLoadState("networkidle");
    await loginPage.goto();
    await loginPage.login('anshika@gmail.com', 'Iamking@000');
    const dashboardHeaderText = await dashboardPage.getDashboardHeaderText();
    expect(dashboardHeaderText).toBe(' Home | Search'); 
});

test('1_Dashboard Tests05', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    await page.waitForLoadState("networkidle");
    await loginPage.goto();
    await loginPage.login('anshika@gmail.com', 'Iamking@000');
    const dashboardHeaderText = await dashboardPage.getDashboardHeaderText();
    expect(dashboardHeaderText).toBe(' Home | Search'); 
});