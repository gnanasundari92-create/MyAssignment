import {chromium, test} from "@playwright/test"

test('learn to launch the browser',async() => {
    const browser= await chromium.launch({headless:false})
    const context=await browser.newContext()
    const page=await context.newPage()
    
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator('#username').fill('democsr2');  
    await page.locator('#password').fill('crmsfa');
    await page.locator('.decorativeSubmit').click();   
    await page.getByText('CRM/SFA ').click();
    await page.locator('a[href="/crmsfa/control/leadsMain"]').click();
    page.waitForTimeout(5000)
    await page.locator('a[href="/crmsfa/control/createLeadForm"]').click();
    await page.locator('input[name="companyName"]').fill("Test Leaf");
    await page.locator('#createLeadForm_firstName').fill('Gnana Sundari');
    await page.locator('#createLeadForm_lastName').fill('Parama Sivam');
    await page.locator('#createLeadForm_personalTitle').fill('Testing');
    await page.locator('#createLeadForm_generalProfTitle').fill('Senior Software Professional');
    await page.locator('#createLeadForm_departmentName').fill("QA");
    await page.locator('#createLeadForm_annualRevenue').fill('120000');
   
    const optionsText=await page.locator('#createLeadForm_dataSourceId>option').allInnerTexts();
    console.log(optionsText);
    console.log(optionsText.length);
    
    
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('9876543210');
    await page.locator('.smallSubmit').click();

}
)