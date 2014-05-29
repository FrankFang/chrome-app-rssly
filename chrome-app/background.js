chrome.app.runtime.onLaunched.addListener(function () {
    chrome.app.window.create('index.html', {
        id: 'main',
        bounds: {
            height: 600,
            width: 800
        },
        //frame: 'none',  // The corners of frameless window is ugly!
        minWidth: 220,
        minHeight: 220
    })
})
