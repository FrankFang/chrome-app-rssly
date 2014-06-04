/* Created by frank on 14-6-2. */
var app = require('../app')

module.exports = app.directive(
    'myFeed',
    function ($timeout, $parse, urlUtils, $http, $sce) {
        return {
            restrict: 'E',
            scope: true,
            templateUrl: 'feeds/template.html',
            link: function ($scope, $element, $attrs) {
                var url = $attrs.url
                var origin = urlUtils.getOrigin(url)
                var iconSrc = origin + '/favicon.ico'
                $http({
                    method: 'GET',
                    url: iconSrc,
                    responseType: 'blob'
                })
                    .then(function (response) {
                        $scope.item.icon = $sce.trustAs($sce.RESOURCE_URL, URL.createObjectURL(response.data));
                    })
            }
        }
    }
)
