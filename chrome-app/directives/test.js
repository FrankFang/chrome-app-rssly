/* Created by frank on 14-5-20. */
var app = require('../app')

module.exports = app.directive(
    'test',
    function ($http, $rootScope) {
        return {
            link: function (scope, element, attr) {
                var url = 'https://ajax.googleapis.com/ajax/services/feed/load'
                var params = {
                    v: '2.0',
                    q: scope.item.url,
                    num: 20
                }
                element.addClass('loading')
                $http({method: 'GET', url: url, params: params}).
                    success(function (data, status, headers, config) {
                        console.log('emit')
                        $rootScope.$broadcast('get:articles', data)
                    })
                    .error(function (data, status, headers, config) {
                        console.log("status:")
                        console.log(status)
                    })
                    .finally(function () {
                        element.removeClass('loading')
                    })
            }
        }
    }
)
