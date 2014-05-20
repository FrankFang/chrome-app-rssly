/* Created by frank on 14-5-20. */
var app = require('../app')
require('../articles/service.js')

module.exports = app.directive(
    'checkChannel',
    function ($http, articleService, $rootScope) {
        return {
            link: function (scope, element, attr) {

                element.addClass('loading')

                articleService.check(scope.item.url)
                    .success(function (data, status, headers, config) {
                        if (data.responseStatus !== 200) {
                            scope.fail = true
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
