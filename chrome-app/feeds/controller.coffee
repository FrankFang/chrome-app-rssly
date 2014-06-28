# Created by frank on 14-5-19.
app = require('../app')

app.controller 'ctrlFeeds', ($scope, $rootScope, $http, $timeout, urlUtils, $sce) ->

    $scope.list = []

    chrome.storage.local.get 'feeds', (response) ->
        $scope.list = response.feeds or []

    $scope.focusAdd = false
    $scope.newFeed = ''

    $scope.showPoptip = false

    $scope.$watch 'error', (value) ->
        if value
            $scope.showPoptip = true

    $scope.onBlur = () ->
        $scope.showPoptip = false

    $scope.openFeed = (index) ->
        if $scope.selectedIndex isnt undefined
            $scope.list[$scope.selectedIndex].active = false
        $scope.selectedIndex = index
        $scope.list[index].active = true
        $rootScope.$broadcast 'openFeed', $scope.list[index]

    $scope.addFeed = () ->
        exist = false
        for item in $scope.list
            if $scope.newFeed is item.url
                exist = true
                break
        if not exist
            $scope.list.push {url: $scope.newFeed}
        else
            $scope.error = 'Already subscribed'

        $scope.newFeed = ''
        $scope.focusAdd = true

    $scope.removeItem = (index) ->
        $scope.list.splice index, 1

    $scope.$watch 'list', ((value) -> chrome.storage.local.set {'feeds': value}), true

