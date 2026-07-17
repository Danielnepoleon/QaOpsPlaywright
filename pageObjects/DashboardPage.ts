
import { Page, Locator } from '@playwright/test';

export class DashboardPage {
    readonly page: Page;
    readonly dashboardHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dashboardHeader = page.locator('section#sidebar>p');
    }

    async getDashboardHeaderText(): Promise<string> {
        return await this.dashboardHeader.textContent() || '';
    }

}