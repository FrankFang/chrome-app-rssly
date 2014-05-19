/* Created by frank on 14-5-19. */
window.onerror = function () {
    document.body.style.display = 'none'
}

//chrome.storage.local.clear()
var app = require('./app')

require('./directives/focusMe')

require('./channels/controller')

