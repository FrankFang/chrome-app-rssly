# Created by frank on 14-6-12.
app = require('../app')

replace = ($element)->
  images = $element.find 'img'
  images = Array.prototype.slice.call images, 0
  images.forEach (image) ->
    xhr = new XMLHttpRequest()
    xhr.open 'GET', image.getAttribute('data-src'), true
    xhr.responseType = 'blob'
    xhr.onload = (e) ->
      image.src = window.URL.createObjectURL this.response
    xhr.send()

module.exports = app.directive 'ffImageReplacer', ->

  scope:
    content: '=ffImageReplacer'
  link:
    post: ($scope, $element, $attrs) ->
      $scope.$watch 'content', ->
        replace($element)


