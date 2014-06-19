/* Created by frank on 14-6-2. */
var app = require('../app')

module.exports = app.directive(
    'myFeed',
    function ($timeout, $parse, urlUtils, $http, $sce) {
        return {
            restrict: 'EA',
            scope: {
                item: '=source'
            },
            templateUrl: 'feeds/template.html',
            link: {
                pre: function ($scope) {
                    // icon is a native object for now.
                    $scope.item.icon = ''
                    $scope.item.active = false
                },
                post: function ($scope, $element, $attrs) {

                    var url = $scope.item.url

                    $http.get('https://ajax.googleapis.com/ajax/services/feed/load?v=2.0&num=0&q=' + encodeURIComponent(url))
                        .success(function (data) {
                            $scope.item.loadFail = false
                            $scope.item.title = data.responseData.feed.title
                        })
                        .error(function () {
                            $scope.item.loadFail = true
                        })


                    var origin = urlUtils.getOrigin(url)
                    var iconSrc = origin + '/favicon.ico'

                    $http({ method: 'GET', url: iconSrc, responseType: 'blob' })
                        .success(function (data) {
                            $scope.item.iconData = data
                            $scope.item.icon = $sce.trustAs($sce.RESOURCE_URL, URL.createObjectURL(data));
                        })

                }
            }
        }
    }
)
