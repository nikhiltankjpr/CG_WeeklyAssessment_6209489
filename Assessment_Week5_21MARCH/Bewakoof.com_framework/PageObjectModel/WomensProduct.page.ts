import { Page, Locator } from '@playwright/test';

export class WomensProductpage {
    readonly page: Page;
    readonly Womenslogo: Locator;
    readonly jeansCategory: Locator;
    readonly firstProduct: Locator;
    readonly sizeButton: Locator;
    readonly addToCartButton: Locator;
    readonly goToCartButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.Womenslogo = page.locator('(//div[@class="relative w-[35%] aspect-[3/5] p-1 flex items-end overflow-hidden bg-cover bg-center bg-no-repeat rounded-lg cursor-pointer lg:rounded-2xl lg:p-3 lg:w-[220px] lg:h-[334px]"])[2]');
        this.jeansCategory = page.locator('//img[@src="https://images.bewakoof.com/uploads/grid/app/MSITE-DESKTOP-444x666-TrendingCategoryIcon-2026-WOMEN-jeans-1773398242.jpg"]');
        this.firstProduct = page.locator('//img[@data-testid="custom-image"]').first();
        this.sizeButton = page.locator('//label[@class="sc-1169b8ab-3 sc-1169b8ab-9 iddAWY dbxURS"]').first();
        this.addToCartButton = page.locator('//button[@data-testid="add to bag "]');
        this.goToCartButton = page.locator('//span[@class="flex gap-2 text-[white] items-center"]');
    }
}