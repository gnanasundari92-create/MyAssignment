function launchbrowser(browserName)
{
    if(browserName=="Chrome")
        console.log("Browser is launched");
    else
        console.log("Browser is not launched");
}

function runTests (testvalue)
{
    switch (testvalue) {
        case "Smoke":
            console.log("This is a Smoke Test");
            break;
        case "Sanity":
            console.log("This is a Sanity Test");
            break;
        case "Regression":
            console.log("This is Regression Test");
            break;
        default:
            console.log("This is a Smoke Test");
            break;
    }
}
launchbrowser("Chrome")
launchbrowser("Firefox")
runTests("Regression")
runTests("Sanity")
runTests("UAT")
runTests("Smoke")


