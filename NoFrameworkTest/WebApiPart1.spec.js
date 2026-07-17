import {test,expect, request} from '@playwright/test';
let token;
let orderId;
const orderPayload = {
    "orders": [
        {
            "country": "India",
            "productOrderedId": "6960ea76c941646b7a8b3dd5"
        }
    ]
}
test.beforeAll(async()=>{
    const apiContext = await request.newContext()
    const response = await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login', 
        {
            data : {
                userEmail: "anshika@gmail.com", 
                userPassword: "Iamking@000"
            }
})
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
})