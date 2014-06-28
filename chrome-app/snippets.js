/* Created by frank on 14-5-19. */
//var $ = require('jquery')
var channel = require('./vendors/channel')

//var source = 'http://www.ruanyifeng.com/blog/atom.xml'
// http://coolshell.cn/feed


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


//chrome.storage.local.clear()

//    scope.$apply(model.assign(scope, false));


//            link: function (scope, element, attrs) {
//                var model = $parse(attrs.focusMe);
//                scope.$watch(model, function (value) {
//                    if (value === true) {
//                        $timeout(function () {
//                            element[0].focus();
//                        });
//                    }
//                })
//            }


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

//#    $scope.articles = [
//#      {
//#        "title": "Git远程操作详解"
//#        "link": "http://www.ruanyifeng.com/blog/2014/06/git_remote.html"
//#        "author": "阮一峰"
//#        "publishedDate": "Wed, 11 Jun 2014 22:22:22 -0700"
//#        "contentSnippet": "Git是目前最流行的版本管理系统，学会Git几乎成了开发者的必备技能。..."
//#        "content": "<div>ccc</div>"
//#        "categories": ["Developer"]
//#      }
//#      {
//#        "title": "Git远程操作详解"
//#        "link": "http://www.ruanyifeng.com/blog/2014/06/git_remote.html"
//#        "author": "阮一峰"
//#        "publishedDate": "Wed, 11 Jun 2014 22:22:22 -0700"
//#        "contentSnippet": "Git是目前最流行的版本管理系统，学会Git几乎成了开发者的必备技能。..."
//#        "content": "<div>ccc</div>"
//#        "categories": ["Developer"]
//#      }
//#    ]
//#
//#    return

$window = angular.element window
records = []
$window.on 'dragstart', (e) ->
    console.log 'dragstart'
$window.on 'dragenter', (e) ->
    console.log 'dragenter'
records.push e.target
$window.on 'dragleave', (e) ->
    console.log 'dragleave'
records = _.without(records, e.target)
#      if records.length is 0
#        console.log 'e'
angular.element(document.body).on 'drop', (e) ->
    console.log 'drop'

$window.on 'dragend', (e) ->
    console.log 'drag'

//omplParser = require 'opml-to-json'
//console.log omplParser
//
//accepts = [
//    {
//        extensions: ['opml']
//    }
//]
//
//chrome.fileSystem.chooseEntry {
//    type: 'openFile'
//    accepts: accepts
//}, (fileEntry)->
//    fileEntry.file (file) ->
//reader = new FileReader()
//reader.onload = (e) ->
//    result = e.target.result
//omplParser result,(error, json)->
//    console.log json
//
//reader.readAsText file

