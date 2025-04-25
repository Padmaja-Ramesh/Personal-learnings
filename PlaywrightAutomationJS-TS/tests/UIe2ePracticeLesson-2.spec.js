import {test, expect} from "@playwright/test";

test.only("end to end",async({page})=>{
    await page.goto('https://rahulshettyacademy.com/client');
    const email = page.locator("#userEmail");
    const password = page.locator("#userPassword");
    await email.fill('');
    await email.fill('padmajaramesh1205@gmail.com');
    await password.fill('');
    await password.fill('Mar#2023');
    await page.locator('#login').click();
    //const text= page.locator(".card-body").nth(0).textContent();
    // textContent() will wait until the page is loaded because waits till the element/locator is attached to the dom. 
    //console.log(await text);
    await page.waitForLoadState("networkidle");
    const text_element = await page.locator(".card-body");
    const texts = await page.locator(".card-body b").allTextContents(); // => it fetches all the text contents of elements that match .card-body b, and returns a string[].
   const count = await texts.length;
//    const texts = await page.locator(".card-body b"); => If you wanted to count elements using the locator 
//    console.log(await texts.count())
   const find_item = 'ZARA COAT 3';
   if(count > 0){
    for(let i=0; i < count; i++ ){
        console.log(await text_element.nth(i).locator('b').textContent() );
        if(await text_element.nth(i).locator('b').textContent()  == find_item ){
            console.log('ready to click');
            await text_element.nth(i).locator( 'button  .fa-shopping-cart').click();
            break;
        }
    }
    await page.locator("[routerlink*='cart']").click();
    await page.locator(".cartSection h3").isVisible();
    const checkPresent = await page.locator(".cartSection h3").textContent();
    expect(await page.locator("h3:has-text('ZARA COAT 3')")).toBeTruthy();
    await page.locator("text=Checkout").click();
    const creditCard = await page.locator(".form__cc div.row");
    const rows = await creditCard.count();
    const data = ['1234 4567 8901 2345', '1234', 'Padma','rahul' ]
    for(let i=0; i < rows; i++){
        await creditCard.nth(i).locator('[type="text"]').fill('');
        await creditCard.nth(i).locator('[type="text"]').fill(data[i]);
    }


    // shipping inform
    const userDetails = await page.locator(".details__user");
    await userDetails.locator("  .user__name  [type='text'].text-validated").fill('');
    await userDetails.locator("  .user__name  [type='text'].text-validated").fill('padmajaramesh1205@gmail.com');
    await userDetails.locator("  .form-group  .text-validated").pressSequentially("ind");
    console.log("success");
        
    await page.pause();
   }

   // allTextContents will return values only its placed after nth/first/last of the textContent() or waitForLoadState() , else return only [].
})