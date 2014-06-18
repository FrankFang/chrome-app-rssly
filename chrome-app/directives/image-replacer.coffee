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
      console.log 'here'
      image.src = window.URL.createObjectURL this.response
    xhr.send()

module.exports = app.directive 'ffImageReplacer', ->

  scope:
    content: '=ffImageReplacer'
  link: ($scope, $element, $attrs) ->
    console.log(1)
    console.log $scope

    unregister = $scope.$watch 'content', ->
      console.log(2)
      console.log $scope
      replace($element)


