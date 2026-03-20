import {test} from "@playwright/test";

// // test("title", () => {
// //     console.log("test1");
// // });

// // test("title2", () => {
// //     console.log("test2");
// // });

// // test("title3", () => {
// //     console.log("test3");
// // });

// // test("title4", () => {
// //     console.log("test4");
// // });


test("title1", async({page}) => {
  await page.goto("https://www.amazon.com");
  await page.locator("input#twotabsearchtextbox").fill("iphone");
  
});

// test("title1", async({browser}) => {
//   let constext = browser.newContext();
  
  
  
// });


