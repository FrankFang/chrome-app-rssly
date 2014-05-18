/* Created by frank on 14-5-19. */
var app = require('../app.js')

app.controller('ctrlChannels', ['$scope', function ($scope) {
    var list = $scope.list = []
    $scope.newItem = ''

    $scope.hi = function () {
        var newItem = $scope.newItem.trim()
        if (newItem === '') {return}
        list.push({url: newItem})
        $scope.newItem = ''
    }
    $scope.hide = true
    $scope.toggle = function () {
        $scope.hide = !$scope.hide
    }
}]);
