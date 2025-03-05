import {expect, test} from  "@playwright/test";

test('register password error',async({page})=>{

    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator('.text-reset').click();
    const firstName = page.locator('#firstName');
    const lastName = page.locator('#lastName');
    const userEmail= page.locator('#userEmail');
    const userMobile = page.locator('#userMobile');
    const Occupation = page.locator("[formcontrolname='occupation']");
    const gender = page.locator("input[value='Female']")
    const password = page.locator("#userPassword");
    const confirmPassword= page.locator("#confirmPassword");
    const checkbox = page.locator("[type='checkbox']");
    const register = page.locator("#login")

    await firstName.fill("");
    await firstName.fill("padmaja");
    await lastName.fill("ramesh");
    await userEmail.fill("padmajaramesh1205@gmail.com");
    await userMobile.fill('9790937030');
    await Occupation.selectOption('Student');
    await gender.click();

    await password.fill('mar#2023');
    await confirmPassword.fill('mar#2023');
    await checkbox.click();
    await register.click();
    await expect(await page.locator('#toast-container').textContent('please enter 1 special')).toBeTruthy();

})

test.only('register success',async({page})=>{
   

    await page.goto('https://rahulshettyacademy.com/client');
    await page.waitForLoadState("domcontentloaded");
    await page.locator('.text-reset').click();
    const firstName = page.locator('#firstName');
    const lastName = page.locator('#lastName');
    const userEmail= page.locator('#userEmail');
    const userMobile = page.locator('#userMobile');
    const Occupation = page.locator("[formcontrolname='occupation']");
    const gender = page.locator("input[value='Female']")
    const password = page.locator("#userPassword");
    const confirmPassword= page.locator("#confirmPassword");
    const checkbox = page.locator("[type='checkbox']");
    const register = page.locator("#login")

    await firstName.fill("");
    await firstName.fill("padmaja");
    await lastName.fill("ramesh");
    await userEmail.fill("padmajaramesh1205@gmail.com");
    await userMobile.fill('9790937030');
    await Occupation.selectOption('Student');
    //page.pause(); used for debugging the page, new window with debugger will be available
    await gender.click();
    //assertion check
    await expect(gender).toBeChecked();
    await password.fill('Mar#2023');
    await confirmPassword.fill('Mar#2023');
    await checkbox.click();
    await register.click();
    await expect(await page.locator('#toast-container').textContent('please enter 1 special')).toBeFalsy();

})

test('login', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/client');
    const email = page.locator("#userEmail");
    const password = page.locator("#userPassword");
    await email.fill('');
    await email.fill('padmajaramesh1205@gmail.com');
    await password.fill('');
    await password.fill('Mar#2023');
    await page.locator('#login').click();

})

test('find card name', async({page})=>{
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
    await page.waitForLoadState("networkidle")
   console.log( await page.locator(".card-body").allTextContents());
   // allTextContents will return values only its placed after nth/first/last of the textContent() or waitForLoadState() , else return only [].

})