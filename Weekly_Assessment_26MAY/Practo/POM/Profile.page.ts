import {Page, Locator, expect} from "@playwright/test";

export class ProfilePage {
    readonly page : Page;
    bookAppointmentButton : Locator;

    constructor(page : Page) {
        this.page = page;
        this.bookAppointmentButton = this.page.locator('//button[@class="u-t-capitalize u-bold u-round-corner--large c-btn--dark-medium"]');
    }

    async verifyProfile() {
        await this.page.waitForLoadState('networkidle');
        await expect(this.bookAppointmentButton).toBeVisible();
    }
}