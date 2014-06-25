angular = require 'angular'
app = require '../app'

module.exports = app.directive 'ffDragOut', () ->
  restrict: 'E'
  link: ($scope, $element, $attrs) ->
    $window = angular.element window
    $window.on 'dragend', (e) ->
      console.log 'dragend'
      console.log e
    $window.on 'drop', (e) ->
      console.log 'drop'
      console.log e

    $body = angular.element document.body
    $body.on 'dragend', (e) ->
      console.log 'dragend'
      console.log e
    $body.on 'drop', (e) ->
      console.log 'drop'
      console.log e


