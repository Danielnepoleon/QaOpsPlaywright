import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageObjects/LoginPage';
import { DashboardPage } from '../pageObjects/DashboardPage';

test('Dashboard Tests', async ({ page }) => {
    const loginPage: LoginPage = new LoginPage(page);
    const dashboardPage: DashboardPage = new DashboardPage(page);
    await page.waitForLoadState("networkidle");
    await loginPage.goto();
    await loginPage.login('anshika@gmail.com', 'Iamking@000');
    const dashboardHeaderText = await dashboardPage.getDashboardHeaderText();
    expect(dashboardHeaderText).toBe(' Home | Search'); 
})