var $ = require('jquery')
var channel = require('./vendors/channel')

var source = 'http://www.ruanyifeng.com/blog/atom.xml'
channel.get(source, function (error, feed) {
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
                ol.appendChild(li)
            })
            document.body.appendChild(frag)

        })
})



