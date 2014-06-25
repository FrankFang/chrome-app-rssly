## Created by frank on 14-5-20.

app = require('../app')
_ = require('lodash')

require('../services/feed')

app.controller 'ctrlArticles', ($scope, feedService, $rootScope, $q) ->

    extendArticles = (target, sources...)->
        links = _.pluck target, 'link'
        sources.forEach (articleList) ->
            articleList.forEach (article) ->
                if not _.contains links, article.link
                    target.push article

    $scope.articles = []
    $scope.status = 'none'

    $scope.$on 'openFeed', (event, data) ->
        url = data.url
        key = 'articles-' + url
        $scope.articles = []
        chrome.storage.local.get key, (response) ->
            extendArticles($scope.articles, response[key])
            $scope.status = 'loading'
            feedService.getExclusively(url).success (response) ->
                list = response?.responseData?.feed?.entries
                extendArticles($scope.articles, list) if list
                temp = {}
                temp[key] = $scope.articles
                chrome.storage.local.set temp
                $scope.status = 'success'

    $scope.openArticle = (index)->

        if $scope.selectedIndex isnt undefined
            $scope.articles[$scope.selectedIndex].active = false

        $scope.selectedIndex = index
        $scope.articles[index].active = true
        $rootScope.$broadcast 'openArticle', $scope.articles[index]

