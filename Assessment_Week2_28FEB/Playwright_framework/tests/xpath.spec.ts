import {test} from "@playwright/test"
import { log } from "node:console"

test("css selector", async ({page}) => {
    // xpath selector
    await page.goto("https://www.amazon.in/?&adgrpid=155259815513&hvpone=&hvptwo=&hvadid=674842289437&hvpos=&hvnetw=g&hvrand=14862453285083557186&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061786&hvtargid=kwd-10573980&hydadcr=14453_2316415")

    await page.locator("//input[@placeholder='Search Amazon.in']").fill("samsung phones")
    await page.locator("//input[@id='nav-search-submit-button']").press("Enter")
    await page.waitForTimeout(5000)
    //    let a = await page.locator("(//span[@class='a-price-whole'])[1]").textContent()
    // let a = await page.locator("//span[@class='a-price-whole']").nth(2).textContent()
        let a = await page.locator("//span[@class='a-price-whole']").first().textContent()
       console.log(a);

})