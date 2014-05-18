var angular = require('angular')


angular.module('app', [])
    .controller('controller', ['$scope', function ($scope) {
        $scope.greetMe = 'World';
    }]);


//var $ = require('jquery')
var channel = require('./vendors/channel')

//var source = 'http://www.ruanyifeng.com/blog/atom.xml'


function onGetFeed(error, feed) {
    var item = channel.renderBlog(feed)
    console.log("feed:")
    console.log(feed)
    $('body').prepend(item)
        .on('click', 'h1', function () {
            var entries = channel.renderEntries(feed)
            var frag = document.createDocumentFragment()
            var ol = document.createElement('ol')
            frag.appendChild(ol)
            entries.forEach(function (entry) {
                var li = document.createElement('li')
                li.appendChild(entry)

                var images = li.querySelectorAll('img')
                images = Array.prototype.slice.call(images, 0)
                images.forEach(function (image) {
                    var xhr = new XMLHttpRequest();
                    xhr.open('GET', image.src, true);
                    xhr.responseType = 'blob';
                    xhr.onload = function (e) {
                        image.src = window.URL.createObjectURL(this.response);
                    };

                    xhr.send();
                })

                ol.appendChild(li)
            })
            document.body.appendChild(frag)


        })
}



