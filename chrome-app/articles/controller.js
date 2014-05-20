/* Created by frank on 14-5-20. */

var app = require('../app.js')

app.controller('ctrlArticles', [
    '$scope',
    function ($scope, $rootScope) {
        $scope.$on('get:articles', function (event, data) {

            console.log("data:")
            console.log(data)
        })
    }
])
