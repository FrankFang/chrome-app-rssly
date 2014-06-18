# Created by frank on 14-6-17.
app = require '../app'

module.exports = app.filter 'ffReplaceImages', ($sce)->
  (input)->
    return '' if not input
    wrapper = document.createElement 'div'
    wrapper.innerHTML = input
    images = wrapper.querySelectorAll 'img'

    for image in images
      if (image.src.indexOf 'javascript:') is 0
        image.remove
      else
        image.setAttribute 'data-src',image.src
        image.src = '#'
    input = wrapper.innerHTML
    $sce.trustAsHtml input
