import {test} from '@playwright/test';
import { log } from 'node:console';


test("browser controls", async({browser}) => {
    // let size = await page.viewportSize()
    // log('Viewport Size: ', size)

    let context = await browser.newContext()
    let page = await context.newPage()


    // await page.setViewportSize({
    //     width: 500,
    //     height: 720
    // })

    // log('Size: ', await page.viewportSize())
    // console.log('url: ', await page.url());

await page.goto('https://www.nike.com')
// log('url: ', await page.url());
await page.screenshot({path: 'screenshot/${time}.png'})
console.log(await context.cookies());


})






