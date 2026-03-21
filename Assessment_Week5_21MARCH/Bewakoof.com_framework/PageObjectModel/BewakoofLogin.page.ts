import { Page, Locator } from '@playwright/test';

export class BewakoofLoginPage {
    readonly page: Page;

    readonly loginIcon: Locator;
    readonly loginButton: Locator;
    readonly googleLoginButton: Locator;
    readonly googleNextButton: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly continueButton: Locator;
    readonly otpInput: Locator;
    readonly profileIcon: Locator;

    constructor(page: Page) {
        this.page = page;

        this.loginIcon = page.locator('a[href*="login"], button:has-text("Login")');
        this.loginButton = page.locator('button:has-text("LOGIN")');
        this.googleLoginButton = page.locator('//span[@class="sc-1247f01b-0 dHA-dnd"]').nth(0);
        this.googleNextButton = page.locator('//span[@class="VfPpkd-vQzf8d"]').nth(0);
        this.emailInput = page.locator('input[type="email"], input[placeholder*="Email"]');
        this.passwordInput = page.locator('input[type="password"], input[placeholder*="Password"]');
        this.continueButton = page.locator('button:has-text("CONTINUE"), button:has-text("Submit")');
        this.otpInput = page.locator('input[type="tel"]');
        this.profileIcon = page.locator('img[alt*="profile"], div:has-text("Hi")');
    }

    async goto() {
        await this.page.goto('https://www.bewakoof.com/');
    }

    async openLogin() {
        await this.loginIcon.first().click();
    }

    async enterEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async enterPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async clickContinue() {
        await this.continueButton.click();
    }

    async enterOTP(otp: string) {
        await this.otpInput.fill(otp);
    }

    async isLoggedIn() {
        return await this.profileIcon.isVisible();
    }
}
