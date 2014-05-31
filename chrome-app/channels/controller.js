/* Created by frank on 14-5-19. */
var app = require('../app.js')
require('../articles/service.js')

app.controller('ctrlChannels',
    function ($scope, $rootScope, articleService, urlUtils) {
        console.log("url:")
        console.log(urlUtils)

        $scope.list = []

        chrome.storage.local.get(function (response) {
            if (!response.channels) {return}
            $scope.list = response.channels || []
            if ($scope.list.length === 0) {
                $scope.list.push(
                    {title: 1, url: 'http://www.ruanyifeng.com/blog/atom.xml'}
                )
            }
            $scope.$apply()
            angular.forEach($scope.list, function (item) {

            }, this)
        })

        $scope.newItem = ''

        $scope.addItem = function () {
            if ($scope.newItem === undefined) { return }
            var newItem = $scope.newItem.trim()
            if (newItem === '') {return}
            $scope.list.push({url: newItem})
            $rootScope.$broadcast('query:channel', $scope.newItem)
            $scope.newItem = ''
        }

        $scope.expendItem = function () {
            $scope.expend = !$scope.expend
        }

        $scope.removeItem = function (index) {
            $scope.list.splice(index, 1);
        }

        $scope.$watch('list', function (value) {
            chrome.storage.local.set({'channels': value})
        }, true)

        $scope.open = false

        $scope.toggle = function () {
            $scope.open = !$scope.open
        }

    }
)
