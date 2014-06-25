# Created by frank on 14-5-19.
window.onerror = () ->
    document.body.style.display = 'none'

require './app'

require './feeds/controller'
require './feeds/directive'

require './articles/controller'
require './articles/directive'

require './preview/controller'
require './preview/directive'

require './directives/focusable'
require './directives/draggable'
require './directives/dragout'

