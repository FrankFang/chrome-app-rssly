# Created by frank on 14-5-19.
window.onerror = () ->
  document.body.style.display = 'none'


require './app'

require './feeds/controller'
require './feeds/directive'
require './directives/focusMe'

document
.querySelector('.channelList')
.addEventListener('contextmenu', (e) ->
  if (this.className.indexOf('editMode') >= 0)
    this.className = 'channelList'
  else
    this.className = 'channelList editMode'
)

console.log 'hi'

