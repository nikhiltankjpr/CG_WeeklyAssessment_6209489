import { test, expect } from '@playwright/test';
import { BewakoofLoginPage } from '../PageObjectModel/BewakoofLogin.page';
import { BewakoofHomePage } from '../PageObjectModel/bewakoofHome.Page';
import { BewakoofProductPage } from '../PageObjectModel/MensProduct.Page';
import { BewakoofCartPage } from '../PageObjectModel/bewakoofCart.Page';
import * as fs from 'fs';
import * as path from 'path';



test('E2E Login Test - Bewakoof', async ({ page }) => {

    const testData = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '../utility/LoginData.json'), 'utf-8')
        );






  const loginPage = new BewakoofLoginPage(page);
  await loginPage.goto();
  await loginPage.openLogin();
  await loginPage.googleLoginButton.click();
  // await loginPage.googleNextButton.click();

  await loginPage.enterEmail(testData.email);
await page.waitForTimeout(2000);
 await page.locator('(//span[@class="VfPpkd-vQzf8d"])[1]').press('Enter'); // Wait for the Google login popup to open
// await page.locator('/span[@class="VfPpkd-vQzf8d"]').nth(0).click();
// await page.waitForEvent('popup'); // Wait for the Google login popup to open
  // await loginPage.googleNextButton.click();
  // await loginPage.clickContinue();

  // await page.pause();
await page.waitForTimeout(2000); // Wait for the Google login popup to open

  //now for password
    await loginPage.enterPassword(testData.password);
    await page.waitForTimeout(2000);
 await page.locator('(//span[@class="VfPpkd-vQzf8d"])[1]').press('Enter');
 await page.waitForTimeout(5000); // Wait for the login process to complete
await page.screenshot({ path: 'bewakoof_login.png' });
  //  await page.pause();


  // const isLoggedIn = await loginPage.isLoggedIn();
  // expect(isLoggedIn).toBeTruthy();


  //pom 2
  const homePage = new BewakoofHomePage(page);

await homePage.gotoHome();

const isHomeLoaded = await homePage.isHomePageLoaded();
expect(isHomeLoaded).toBeTruthy();
await page.screenshot({ path: 'bewakoof_home.png' });



//pom 3 for mens product
// await menslogo.click();

const productPage = new BewakoofProductPage(page);

await productPage.Menslogo.click();
//await page.waitForTimeout(2000);
await page.screenshot({ path: 'bewakoof_menslogo.png' });
await productPage.tshirtCategory.click();
 //await page.waitForTimeout(2000);
await page.screenshot({ path: 'bewakoof_menstshirts.png' });
await productPage.firstProduct.click();
// await page.waitForTimeout(2000);
await productPage.sizeButton.click();
await productPage.addToCartButton.click();

await productPage.goToCartButton.click();

await page.screenshot({ path: 'bewakoof_cart.png' });



//pom4 removing product from cart

await homePage.gotoHome();


const cartPage = new BewakoofCartPage(page);

await cartPage.cartItem.click();
await cartPage.removeButton.nth(1).click();

await cartPage.confirmRemoveButton.click();


await homePage.gotoHome();




});