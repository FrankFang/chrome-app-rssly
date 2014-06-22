## Created by frank on 14-5-20.

app = require('../app')
require('../services/feed')

app.controller 'ctrlArticles', ($scope, feedService, $rootScope) ->
  $scope.articles = []
  $scope.status = 'none'
  $scope.$on('openFeed', (event, data) ->

    $scope.articles = [
      {
        "title": "Git远程操作详解"
        "link": "http://www.ruanyifeng.com/blog/2014/06/git_remote.html"
        "author": "阮一峰"
        "publishedDate": "Wed, 11 Jun 2014 22:22:22 -0700"
        "contentSnippet": "Git是目前最流行的版本管理系统，学会Git几乎成了开发者的必备技能。..."
        "content": "<div>ccc</div>"
        "categories": ["Developer"]
      }
      {
        "title": "Git远程操作详解"
        "link": "http://www.ruanyifeng.com/blog/2014/06/git_remote.html"
        "author": "阮一峰"
        "publishedDate": "Wed, 11 Jun 2014 22:22:22 -0700"
        "contentSnippet": "Git是目前最流行的版本管理系统，学会Git几乎成了开发者的必备技能。..."
        "content": "<div>ccc</div>"
        "categories": ["Developer"]
      }
    ]

    return

    url = data.url
    $scope.status = 'loading'
    feedService.get(url).success (response) ->
      list = response?.responseData?.feed?.entries
      $scope.articles = list if list
      $scope.status = 'success'
  )

  $scope.openArticle = (index)->
    $rootScope.$broadcast 'openArticle', $scope.articles[index]
