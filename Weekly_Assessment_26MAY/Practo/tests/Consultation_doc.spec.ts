import {test} from '@playwright/test';
import { LoginPage } from '../POM/Login.page';
import { HomePage } from '../POM/Home.page';
import { SearchResultPage } from '../POM/SearchResult.page';
import { ProfilePage } from '../POM/Profile.page';

test("Open doctor profile and verify", async ({page}) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const searchResultPage = new SearchResultPage(page);
    const profilePage = new ProfilePage(page);
                
    await homePage.goto();
    await loginPage.login();
    await homePage.searchDoctor();
    await searchResultPage.openFirstDoctor();
    await profilePage.verifyProfile();
    await page.screenshot({path: 'Profile.png'});
})