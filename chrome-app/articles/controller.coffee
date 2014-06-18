## Created by frank on 14-5-20.

app = require('../app')
require('../services/feed')

app.controller 'ctrlArticles', ($scope, feedService, $rootScope) ->
  $scope.articles = []
  $scope.status = 'none'
  $scope.$on('openFeed', (event, data) ->
    url = data.url
    $scope.status = 'loading'
    feedService.get(url).success (response) ->
      list = response?.responseData?.feed?.entries
      $scope.articles = list if list
      $scope.status = 'success'
  )

  $scope.openArticle = (index)->
    $rootScope.$broadcast 'openArticle', $scope.articles[index]
