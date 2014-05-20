/* Created by frank on 14-5-19. */
var app = require('../app.js')

app.controller('ctrlChannels', [
    '$scope', '$rootScope',
    function ($scope, $rootScope) {

        $scope.list = []

        chrome.storage.local.get(function (response) {
            if (!response.channels) {return}
            $scope.list = response.channels || []
            $scope.$apply()
        })

        $scope.newItem = ''

        $scope.addItem = function () {
            if ($scope.newItem === undefined) { return }
            var newItem = $scope.newItem.trim()
            if (newItem === '') {return}
//            $scope.list.push({url: newItem})
            $rootScope.$broadcast('query:channel', $scope.newItem)
            $scope.newItem = ''
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
])
