import { test, expect } from '@playwright/test';
import { BewakoofLoginPage } from '../../PageObjectModel/BewakoofLogin.page';
import { BewakoofHomePage } from '../../PageObjectModel/bewakoofHome.Page';
import { WomensProductpage } from '../../PageObjectModel/WomensProduct.page';
import * as fs from 'fs';
import * as path from 'path';



test('E2E Login Test - Bewakoof', async ({ page }) => {
    const testData = JSON.parse(
        fs.readFileSync(path.resolve(__dirname, '../../utility/LoginData.json'), 'utf-8')
    );

    const loginPage = new BewakoofLoginPage(page);
    await loginPage.goto();
    await loginPage.openLogin();
    await loginPage.googleLoginButton.click();

    await loginPage.enterEmail(testData.email);
    await page.waitForTimeout(2000);
    await page.locator('(//span[@class="VfPpkd-vQzf8d"])[1]').press('Enter');

    await page.waitForTimeout(2000);

    await loginPage.enterPassword(testData.password);
    await page.waitForTimeout(2000);
    await page.locator('(//span[@class="VfPpkd-vQzf8d"])[1]').press('Enter');
    await page.waitForTimeout(5000);
    
    const homePage = new BewakoofHomePage(page);
    await homePage.gotoHome();

const productPage = new WomensProductpage(page);
await page.waitForTimeout(2000);

await productPage.Womenslogo.click();
await productPage.jeansCategory.click();
await productPage.firstProduct.click();
await productPage.sizeButton.click();
await productPage.addToCartButton.click();
await productPage.goToCartButton.click();
});






