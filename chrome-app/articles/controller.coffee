## Created by frank on 14-5-20.

app = require('../app.js')
require('../services/feed')

app.controller('ctrlArticles', ($scope, feedService, $timeout) ->
  $scope.articles = []
  $scope.$on('foo', (event, data) ->
    url = data.url
    feedService.get(url).success (response) ->
      list = response?.responseData?.feed?.entries
      $scope.articles = list if list
  )
)
