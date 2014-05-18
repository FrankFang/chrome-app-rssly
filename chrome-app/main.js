/* Created by frank on 14-5-19. */
window.onerror = function () {
    document.body.style.display = 'none'
}
var app = require('./app')
require('./channels/controller')