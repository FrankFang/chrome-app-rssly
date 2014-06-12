app = require('../app.js')

app.controller 'ctrlPreview', ($scope, $sce) ->
  $scope.$on 'openArticle', (event, article)->
    angular.extend $scope, article
    $scope.content = $sce.trustAsHtml $scope.content

