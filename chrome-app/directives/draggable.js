/* Created by frank on 14-6-12. */
var app = require('../app')

module.exports = app.directive(
    'ffDraggable',
    function ($timeout, $parse) {
        return {
            link: function ($scope, $element, $attrs) {
                $element
                    .prop('draggable', true)
                    .on('dragstart', function () {
                        this.classList.add('drag')
                    })
                    .on('dragend', function (e) {
                        this.classList.remove('drag')
                        console.log(e)
                    })
            }
        }
    }
)

