/* Created by frank on 14-5-20. */
var app = require('../app')
require('../articles/service.js')

module.exports = app.directive(
    'checkChannel',
    function ($http, articleService, $rootScope) {
        return {
            restrict: 'E',
            //replace: true,
            link: function (scope, element, attr) {

                element.addClass('loading')

                articleService.check(scope.item.url)
                    .success(function (data, status, headers, config) {
                        if (data.responseStatus !== 200) {
                            scope.item.fail = true
                        } else {
                            scope.item.title = data.responseData.feed.title
                            console.log('done')
                        }
                    })
                    .error(function (data, status, headers, config) {
                        scope.fail = true
                    })
                    .finally(function () {
                        element.removeClass('loading')
                    })
            }
        }
    }
)
