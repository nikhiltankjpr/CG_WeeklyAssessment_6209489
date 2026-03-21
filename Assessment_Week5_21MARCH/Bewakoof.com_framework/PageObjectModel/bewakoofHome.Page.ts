import { Page, Locator } from '@playwright/test';

export class BewakoofHomePage {
    readonly page: Page;

    readonly homeLogo: Locator;
    readonly menMenu: Locator;
    readonly womenMenu: Locator;
    readonly searchBar: Locator;

    constructor(page: Page) {
        this.page = page;

        this.homeLogo = page.locator('//img[@src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"]');
        this.menMenu = page.locator('text=MEN');
        this.womenMenu = page.locator('text=WOMEN');
        this.searchBar = page.locator('input[placeholder*="Search"]');
    }

    async gotoHome() {
        await this.page.goto('https://www.bewakoof.com/');
    }

    async isHomePageLoaded() {
        return await this.homeLogo.isVisible();
    }

    async clickMenSection() {
        await this.menMenu.click();
    }

    async searchProduct(product: string) {
        await this.searchBar.fill(product);
        await this.page.keyboard.press('Enter');
    }
}
