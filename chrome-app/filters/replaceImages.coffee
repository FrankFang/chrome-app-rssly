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
        image.src = 'assets/svg/loading-spinning-bubbles.svg'
    input = wrapper.innerHTML
    console.log 'ffRI'
    $sce.trustAsHtml input
