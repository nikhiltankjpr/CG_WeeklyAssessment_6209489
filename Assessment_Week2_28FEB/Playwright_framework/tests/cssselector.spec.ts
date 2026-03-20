import {test} from "@playwright/test"
import { isGeneratorObject } from "node:util/types"

test("css selector", async ({page}) => {
    // css selector
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    //await page.locator("input#username").action
    await page.locator("input#username").fill("student")
    //await page.locator("[name="username"]").fill("student") -- also a way to do it
    await page.locator("input#password").fill("Password123")
        await page.locator("button#submit").click()
            await page.locator(".wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color").click()


})