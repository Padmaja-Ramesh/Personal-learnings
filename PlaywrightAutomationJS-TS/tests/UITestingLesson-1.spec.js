import {expect, test} from  "@playwright/test";
// in js always async - await needed. 

// parameter with {} is called fixtures in playwright, example fixtures - browser, page
// fixtures will help you with setup the environment/requirements for the testing
test('browser-fixture test', async({browser})=>{
    // for opening new window/ incognito with required plug-ins 
    const context = await browser.newContext();
    // required page url to open
    const page = await context.newPage();
    await page.goto("https://www.tsys.com/")
    console.log(page.title())
    await expect(page).toHaveTitle("TSYS Payment Solutions: Unlocking Payment Possibilities | TSYS")
})

test('page-fixture test', async({page})=>{
    await page.goto("https://www.cgi.com/en")
    console.log(page.title())
    await expect(page).toHaveTitle("IT and business consulting services | CGI.com")
})

test('error-msg-catch', async({page})=>{
    await page.goto("https://sso.tsys.com/as/authorization.oauth2?response_type=code&client_id=Sharepoint_Prod&redirect_uri=https%3A%2F%2Fportal.tsys.com%2Fpa%2Foidc%2Fcb&state=eyJ6aXAiOiJERUYiLCJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2Iiwia2lkIjoicFFfam1KSHdWWU1vX3pMeXdmeU1EcUhRTXVJIiwic3VmZml4IjoiSVh4R2JvLjE3NDEwMTg1MzEifQ..3UvSeLcwC8gh9VcmsC8aNA.QdFIu7b1eJ2szphf11QaRJ4hSiLFr-xp--w3PwpexYszFpxavO1UhMhVSxlEgNw4_L5dt4tO0-Q656LU8-hAEQ.b7FjGgIaonNEEdo5bEM6Eg&nonce=X8_Iy-XKITAemMeLqtF2GVeALlvtoF-qIVdK7rzQjFM&acr_values=Level2&scope=openid%20profile%20address%20email%20phone&vnd_pi_requested_resource=https%3A%2F%2Fportal.tsys.com%2F&vnd_pi_application_name=ClientportalSP_PROD");
    await page.locator('#username').fill("name"); // G1039067
    await page.locator("#password").fill("pass");//v!mpR@1984
    await page.locator('[type="submit"]').click()
    // const errorMsg = await page.locator('div.error').textContent();
    // console.log(errorMsg);
    console.log(await page.locator('div.error').textContent())
    await expect(await page.locator('div.error').textContent()).toContain("didn't"); // need await for locator also else it will through error 

})

test('login', async({page})=>{
    const userInput = page.locator('#username');
    const passwordInput = page.locator("#password");
    await page.goto("https://sso.tsys.com/as/authorization.oauth2?response_type=code&client_id=Sharepoint_Prod&redirect_uri=https%3A%2F%2Fportal.tsys.com%2Fpa%2Foidc%2Fcb&state=eyJ6aXAiOiJERUYiLCJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2Iiwia2lkIjoicFFfam1KSHdWWU1vX3pMeXdmeU1EcUhRTXVJIiwic3VmZml4IjoiSVh4R2JvLjE3NDEwMTg1MzEifQ..3UvSeLcwC8gh9VcmsC8aNA.QdFIu7b1eJ2szphf11QaRJ4hSiLFr-xp--w3PwpexYszFpxavO1UhMhVSxlEgNw4_L5dt4tO0-Q656LU8-hAEQ.b7FjGgIaonNEEdo5bEM6Eg&nonce=X8_Iy-XKITAemMeLqtF2GVeALlvtoF-qIVdK7rzQjFM&acr_values=Level2&scope=openid%20profile%20address%20email%20phone&vnd_pi_requested_resource=https%3A%2F%2Fportal.tsys.com%2F&vnd_pi_application_name=ClientportalSP_PROD");
    await userInput.fill("") ;
    await userInput.fill("G1039067") ;// G1039067
    await passwordInput.fill("");
    await passwordInput.fill("v!mpR@1984");//v!mpR@1984
    await page.locator('[type="submit"]').click();
    console.log(await page.locator("form.access-manager p").textContent());
    await page.locator("form.access-manager p").textContent("Where did you meet your spouse/significant other?");
    await page.locator('[type="password"]').fill("");
    await page.locator('[type="password"]').fill("veedur");
    await page.locator('#btnContinue').click();


})

test('login-practise', async({page})=>{
    const userInput = page.locator('#username');
    const passwordInput = page.locator("#password");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await userInput.fill("") ;
    await userInput.fill("rahulshettyacademy") ;
    await passwordInput.fill("");
    await passwordInput.fill("learning");
    await page.locator('#terms').click();
    await page.locator('[type="submit"]').click();
    console.log(await page.locator('.card-body a').first().textContent());
    console.log(await page.locator('.card-body a').nth(2).textContent());
    const allTextContext = await page.locator('.card-body a').allTextContents();
    console.log(allTextContext);

})
