import {test, webkit, chromium} from "@playwright/test"

test('learn to launch the browser',async() => {
    //Browser instances for webkit browser
    const browser= await webkit.launch({headless:false}) //creating browser instance for WebKit
    const context=await browser.newContext()
    const page=await context.newPage()

    //Browser instances for Edge browser
    const edgebrowser= await chromium.launch({headless:false}) //creating browser instance for WebKit
    const edgecontext=await edgebrowser.newContext()
    const edgepage=await edgecontext.newPage()
    
    
    //2 different sites opening in 2 browsers 
    
    await page.goto("https://www.flipkart.com/");

    await page.waitForTimeout(10000); //wait ti identify 2 browsers
    await edgepage.goto("https://www.redbus.in/")

    //Getting title of Flipkart and Redbus
    let title=await page.title(); //Getting title from page
    console.log("Title of Flipkart is",title);

    let etitle=await edgepage.title(); //Getting title from page
    console.log("Title of RedBus is",etitle);

    //Getting URL of Flipkart and Redbus
    let eURL=edgepage.url(); //Getting URL from page
    console.log("URL of Flipkart is",eURL);

    let URL=page.url(); //Getting URL from page
    console.log("URL of RedBus is",URL);
})