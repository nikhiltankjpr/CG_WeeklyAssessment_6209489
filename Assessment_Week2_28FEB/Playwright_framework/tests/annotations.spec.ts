//annotations
//we are adding some extra label


/*
skip
only
fixme
fail
describe
slow
settimeout
*/

import {test} from '@playwright/test';

test("title", async() => {
    console.log("test1");
});

test("title2", async() => {
    console.log("test2");
});

test("title3", async() => {
    console.log("test3");
});

test("title4", async() => {
    console.log("test4");
});

test("title5", async() => {
    console.log("test5");
});

// test("group of tests", () => {
//     test("title6", async() => {
//         console.log("test6");
//     })

//     test("title8", async() => {
//         console.log("test8");
//     })

// });