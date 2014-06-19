app = require('../app')

module.exports = app.directive 'ffArticlePreview', ($timeout, $parse, urlUtils, $http, $sce) ->
  restrict: 'E'
  scope:
    content: '=content'
  link:
    post: ($scope, $element, $attrs) ->
      console.log $scope.content
