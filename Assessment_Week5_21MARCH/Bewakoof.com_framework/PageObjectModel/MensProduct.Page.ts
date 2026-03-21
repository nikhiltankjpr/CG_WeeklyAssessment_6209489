import { Page, Locator } from '@playwright/test';

export class BewakoofProductPage {
    readonly page: Page;
readonly Menslogo: Locator;
    // readonly menMenu: Locator;
    readonly tshirtCategory: Locator;
    readonly firstProduct: Locator;
    readonly sizeButton: Locator;
    readonly addToCartButton: Locator;
    readonly goToCartButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.Menslogo = page.locator('(//div[@class="relative w-[35%] aspect-[3/5] p-1 flex items-end overflow-hidden bg-cover bg-center bg-no-repeat rounded-lg cursor-pointer lg:rounded-2xl lg:p-3 lg:w-[220px] lg:h-[334px]"])[1]');
        // this.menMenu = page.locator('text=MEN');
        this.tshirtCategory = page.locator('//img[@src="https://images.bewakoof.com/uploads/grid/app/MSITE-DESKTOP-444x666-TrendingCategoryIcon-2026-MEN-tshirt-1773409894.jpg"]');
        this.firstProduct = page.locator('//img[@data-testid="custom-image"]').first();
        this.sizeButton = page.locator('//label[@data-testid="size-M"]');
        this.addToCartButton = page.locator('//button[@data-testid="add to bag "]');
        this.goToCartButton = page.locator('//span[@class="flex gap-2 text-[white] items-center"]');
    }


    // async goToMensTshirts() {
    //     await this.menMenu.click();
    //     await this.tshirtCategory.click();
    // }

    // async selectFirstProduct() {
    //     await this.firstProduct.click();
    // }

    // async selectSize() {
    //     await this.sizeButton.click();
    // }

    // async addToCart() {
    //     await this.addToCartButton.click();
    // }

    // async goToCart() {
    //     await this.goToCartButton.click();
    // }
}
