/* Created by frank on 14-5-19. */
window.onerror = function () {
    document.body.style.display = 'none'
}

//chrome.storage.local.clear()
require('./app')

require('./directives/focusMe')
require('./directives/test')

require('./channels/controller')

require('./articles/controller')


