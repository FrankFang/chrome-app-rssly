app = require('../app')

app.controller 'ctrlPreview', ($scope, $sce) ->
  $scope.$on 'openArticle', (event, article)->
    angular.extend $scope, article
