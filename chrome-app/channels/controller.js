/* Created by frank on 14-5-19. */
var app = require('../app.js')

app.controller('ctrlChannels', [
    '$scope',
    function ($scope) {

        $scope.list = []

        chrome.storage.local.get(function (response) {
            if (!response.channels) {return}
            $scope.list = response.channels || []
            $scope.$apply()
        })

        $scope.newItem = ''

        $scope.addItem = function () {
            console.log(newItem)
            if (newItem === undefined) { return }
            var newItem = $scope.newItem.trim()
            if (newItem === '') {return}
            $scope.list.push({url: newItem})
            $scope.newItem = ''
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
