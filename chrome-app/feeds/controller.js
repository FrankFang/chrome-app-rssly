/* Created by frank on 14-5-19. */
var app = require('../app.js')

app.controller('ctrlFeeds',
    function ($scope, $rootScope, $http, $timeout, urlUtils, $sce) {

        $scope.list = []

        chrome.storage.local.get(function (response) {
//            var list = response.feeds || []
        })

        $scope.newFeed = ''

        $scope.addFeed = function () {
            $scope.list.push({url: $scope.newFeed})
        }

        $scope.expendItem = function () {
            $scope.expend = !$scope.expend
        }

        $scope.removeItem = function (index) {
            $scope.list.splice(index, 1);
        }

        $scope.$watch('list', function (value) {
            chrome.storage.local.set({'feeds': value})
        }, true)

        $scope.open = false

        $scope.toggle = function () {
            $scope.open = !$scope.open
        }

        $scope.getFavicon = function (origin) {
            var iconSrc = origin + '/favicon.ico'
            return $http({
                method: 'GET',
                url: iconSrc,
                responseType: 'blob'
            })
        }

    }
)
