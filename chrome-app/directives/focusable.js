/* Created by frank on 14-5-19. */
var app = require('../app')

module.exports = app.directive(
    'ff-focusable',
    function ($timeout, $parse) {
        return {
            link: function ($scope, $element, $attrs) {
                var toggle = $attrs.focusMe
                $scope.$watch(toggle, function (value) {
                    if (value) {
                        $timeout(function () {
                            $element[0].focus()
                        });
                    }
                })
            }
        }
    }
)
