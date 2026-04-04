import { test,expect } from "@playwright/test"
import fs from "fs"
import path from "path"

let data_file = fs.readFileSync(path.join(__dirname,"../json/data.json"))
let data = JSON.parse(data_file)
let Base_url="https://restful-booker.herokuapp.com";


test("strore", async ({ request }) => {

//AUTHENTICATION
  let r1 = await request.post(`${Base_url}/auth`, {
    headers: {
      "Content-Type": "application/json"
    },
    data: {
      username: data.username,
      password: data.password
    }
  });

  
let authResponse = await r1.json();
let token = authResponse.token;
console.log(authResponse)
expect(r1.status()).toBe(200)


  //create booking USING POST METHOD
    let r2 = await request.post(`${Base_url}/booking`, {
    headers: {
      "Content-Type": "application/json"
    },
    data: {
    firstname: data.firstname,
    lastname: data.lastname,
    totalprice: data.totalprice,
    depositpaid: data.depositpaid,
    bookingdates: data.bookingdates,
    additionalneeds: data.additionalneeds
    }   
  });


console.log(await r2.json())
expect(r2.status()).toBe(200)


// //get booking
let r3=await request.get(`${Base_url}/booking`)
console.log(await r3.json())
expect(r3.status()).toBe(200)

// GET by booking id
let r4=await request.get(`${Base_url}/booking/${data.id}`)
console.log(await r4.json()) 
expect(r4.status()).toBe(200)

//updating booking id with different name and lastname using patch method
let r5 = await request.patch(`${Base_url}/booking/${data.id}`, {
        headers: {
            "Cookie": `token=${token}`
        },
        data: {
            firstname: data.partialFirstname,
            lastname: data.partialLastname
        }
})
console.log(await r5.status());
console.log(await r5.json());
expect(r5.status()).toBe(200);
expect((await r5.json()).firstname).toBe(data.partialFirstname);
expect((await r5.json()).lastname).toBe(data.partialLastname);

// Health Check 
let r6 = await request.get(`${Base_url}/ping`, {
  ignoreHTTPSErrors: true
  })
console.log(await r6.status());
expect(r6.status()).toBe(201);
});