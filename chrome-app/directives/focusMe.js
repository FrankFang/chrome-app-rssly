/* Created by frank on 14-5-19. */
var app = require('../app')

module.exports = app.directive(
    'focusMe',
    function ($timeout, $parse) {
        return {
            link: function (scope, element, attrs) {
                var model = $parse(attrs.focusMe);
                scope.$watch(model, function (value) {
                    if (value === true) {
                        $timeout(function () {
                            element[0].focus();
                        });
                    }
                })
            }
        }
    }
)
