/* Created by frank on 14-5-21. */
var app = require('../app')

app.directive('resizer', function ($document) {

    return function ($scope, $element, $attrs) {

        $element.on('mousedown', function (event) {
            event.preventDefault();

            $document.on('mousemove', mouseMove);
            $document.on('mouseup', mouseUp);
        });

        function mouseMove(event) {

            if ($attrs.resizer === 'vertical') {
                // Handle vertical resizer
                var x = event.pageX;

                if ($attrs.resizerMax && x > $attrs.resizerMax) {
                    x = parseInt($attrs.resizerMax, 10);
                }

                $element.css({
                    left: x + 'px'
                });

                $($attrs.resizerLeft).css({
                    width: x + 'px'
                });
                $($attrs.resizerRight).css({
                    left: (x + parseInt($attrs.resizerWidth, 10)) + 'px'
                });

            } else {
                // Handle horizontal resizer
                var y = window.innerHeight - event.pageY;

                $element.css({
                    bottom: y + 'px'
                });

                $($attrs.resizerTop).css({
                    bottom: (y + parseInt($attrs.resizerHeight, 10)) + 'px'
                });
                $($attrs.resizerBottom).css({
                    height: y + 'px'
                });
            }
        }

        function mouseUp() {
            $document.unbind('mousemove', mouseMove);
            $document.unbind('mouseup', mouseUp);
        }
    };
});
