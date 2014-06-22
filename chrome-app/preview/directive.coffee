app = require('../app')

module.exports = app.directive 'ffArticlePreview', ($timeout, $parse, urlUtils, $http, $sce) ->
  restrict: 'AE'
  scope:
    content: '=content'
  link:
    post: ($scope, $element, $attrs) ->
      $scope.$watch 'content', (value)->
        html = $sce.trustAsHtml value
        $element.html(html)
        $element.parent()[0].scrollTop = 0
        images = $element.find 'img'
        images = Array.prototype.slice.call images, 0
        images.forEach (image) ->
          xhr = new XMLHttpRequest()
          src = image.getAttribute 'src'
          if src.indexOf('javascript') is 0
            image.remove()
            return
          xhr.open 'GET', src, true
          xhr.responseType = 'blob'
          image.style.display = 'none'
          xhr.onload = () ->
            image.src = window.URL.createObjectURL this.response
            image.style.display = 'inline-block'
          xhr.send()
        anchors = $element.find 'a'
        anchors = Array.prototype.slice.call anchors, 0
        anchors.forEach (anchor) ->
          anchor.setAttribute('target', '_blank')
