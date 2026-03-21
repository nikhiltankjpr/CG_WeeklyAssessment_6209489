import { Page, Locator } from '@playwright/test';

export class BewakoofCartPage {
    readonly page: Page;

    readonly cartItem: Locator;
    readonly removeButton: Locator;
    readonly confirmRemoveButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.cartItem = page.locator('//span[@class="sc-1247f01b-0 fYnHCb header_cart_count_wrapper__F85yk"]');
        this.removeButton = page.locator('//*[local-name()="svg" and @style="height: 16px; width: 16px;"]');
        this.confirmRemoveButton = page.locator('//button[@class="sc-76dd37a2-0 sc-76dd37a2-1 sc-76dd37a2-2 cbEvAU kqRgGs"]');
    }

    async removeItem() {
        await this.removeButton.first().click();

        if (await this.confirmRemoveButton.isVisible()) {
            await this.confirmRemoveButton.click();
        }
    }


}
