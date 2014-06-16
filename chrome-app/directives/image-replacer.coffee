# Created by frank on 14-6-12.
app = require('../app')

replace = ($element)->
  images = $element.find 'img'
  images = Array.prototype.slice.call images, 0
  images.forEach (image) ->
    return if (image.src.indexOf 'javascript:') is 0
    xhr = new XMLHttpRequest()
    xhr.open 'GET', image.src, true
    xhr.responseType = 'blob'
    xhr.onload = (e) ->
      image.src = window.URL.createObjectURL this.response
    xhr.send()

module.exports = app.directive 'ffImageReplacer', ->
  link: ($scope, $element, $attrs) ->
    unregister = $scope.$watch (
      ->$element.find('img').length
    ), (
      (newValue)->
        replace($element)
    )


