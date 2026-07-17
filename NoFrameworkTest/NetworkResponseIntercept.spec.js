import {test,expect, request} from '@playwright/test';
let token;
let loginPayload = {  userEmail: "anshika@gmail.com", userPassword: "Iamking@000"      }
let fakePayload = {message:"No Product in Cart"}
const orderPayload = {
    "orders": [
        {
            "country": "India",
            "productOrderedId": "6960ea76c941646b7a8b3dd5"
        }
    ]
}
let orderId;
test.beforeAll(async()=>{
    const apiContext = await request.newContext()
    const response = await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login', 
        {
            data : loginPayload
        }
)
const body = await response.json();
token = body.token;
console.log(token);
})

test.beforeEach(async()=>{
    const apiContext = await request.newContext()
    const response = await apiContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order',{
        data : orderPayload,
        headers : {
            'Authorization' : token,
            'Content-Type' : 'application/json'
        }
    })
    const body = await response.json();
    orderId = body.productOrderId[0];
    console.log(orderId);
})


test('Create Order', async({page})=>{

    page.addInitScript(value => {
        window.localStorage.setItem ('token', value);   }, token);
        await page.goto('https://rahulshettyacademy.com/client');
        page.route("https://rahulshettyacademy.com/api/ecom/user/get-cart-products/*", async (route) => {
           const response = await page.request.fetch(route.request());
           let body = JSON.stringify(fakePayload);
              route.fulfill({
                response,
                body
        })
})

  await page.locator("button[routerlink*='myorders']").click();
  await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
  
 
  console.log(await page.locator(".mt-4").textContent());
})