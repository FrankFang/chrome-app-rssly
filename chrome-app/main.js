/* Created by frank on 14-5-19. */
window.onerror = function () {
    document.body.style.display = 'none'
}

//chrome.storage.local.clear()
//chrome.contextMenus.create({
//    type: 'normal',
//    title: 'Menu A',
//    id: 'a'
//});

var app = require('./app')

//require('./directives/focusMe')
//require('./directives/checkChannel')

require('./channels/controller')
//require('./articles/controller')

document.querySelector('.channelList').addEventListener('contextmenu', function (e) {
    if (this.className.indexOf('editMode') >= 0) {
        this.className = 'channelList'
    } else {
        this.className = 'channelList editMode'
    }

})

