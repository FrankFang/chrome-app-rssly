/* Created by frank on 14-5-19. */
window.onerror = function () {
    document.body.style.display = 'none'
}

chrome.storage.local.clear()

require('./app')

require('./feeds/controller')
require('./feeds/directive')

document.querySelector('.channelList').addEventListener('contextmenu', function (e) {
    if (this.className.indexOf('editMode') >= 0) {
        this.className = 'channelList'
    } else {
        this.className = 'channelList editMode'
    }

})

