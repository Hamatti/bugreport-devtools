browser.browserAction.onClicked.addListener(async () => {
    let oldValue = await browser.storage.local.get('example');
    console.log(`Old: ${oldValue.example}`)

    let newValue = (oldValue.example || 0) + 1;
    
    console.log(`New: ${newValue}`)

    browser.storage.local.set({
        example: newValue
    })
})