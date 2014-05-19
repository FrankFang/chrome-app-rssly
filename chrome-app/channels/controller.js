/* Created by frank on 14-5-19. */
var app = require('../app.js')

app.controller('ctrlChannels', [
    '$scope', 'chromeStorage',
    function ($scope, chromeStorage) {
        var list = $scope.list = []
        chromeStorage.get('channels').then(function (value) {
            $scope.list = value
        })

        $scope.newItem = ''

        $scope.addItem = function () {
            var newItem = $scope.newItem.trim()
            if (newItem === '') {return}
            list.push({url: newItem})
            $scope.newItem = ''
        }
        $scope.$watch('list', function (value) {
            chromeStorage.set('channels', value)
            // FIXME: no set?
        }, true)


        $scope.hide = true
        $scope.toggle = function () {
            $scope.hide = !$scope.hide
        }
    }
])
