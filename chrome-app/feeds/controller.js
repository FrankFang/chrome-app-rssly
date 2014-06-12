/* Created by frank on 14-5-19. */
var app = require('../app.js')

app.controller('ctrlFeeds',
    function ($scope, $rootScope, $http, $timeout, urlUtils, $sce) {

        $scope.list = []

        chrome.storage.local.get(function (response) {
            $scope.list = response.feeds || []
            if ($scope.list.length === 0) {
                $scope.list.push({url: 'http://www.ruanyifeng.com/blog/atom.xml'})
            }
        })

        $scope.focusAdd = false
        $scope.newFeed = ''

        $scope.showPoptip = false

        $scope.$watch('error', function (value) { if (value) { $scope.showPoptip = true } })

        $scope.onBlur = function () {
            $scope.showPoptip = false
        }

        $scope.addFeed = function () {
            var exist = false
            for (var i = 0, length = $scope.list.length; i < length; i += 1) {
                if ($scope.newFeed === $scope.list[i].url) {
                    exist = true
                    break
                }
            }
            if (!exist) {
                $scope.list.push({url: $scope.newFeed})
            } else {
                $scope.error = 'Already subscribed'
            }
            $scope.newFeed = ''
            $scope.focusAdd = true
        }

        $scope.removeItem = function (index) {
            $scope.list.splice(index, 1);
        }

        $scope.$watch('list', function (value) {
            chrome.storage.local.set({'feeds': value})
        }, true)

    }
)
