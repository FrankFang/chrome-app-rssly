//var $ = require('jquery')

var html = require('html.js')
var channel = require('./vendors/channel')
console.log("channel:")
console.log(channel)

var source = 'http://www.ruanyifeng.com/blog/atom.xml'
channel.get(source, function (error, feed) {
    var item = channel.render(feed)
    html.body.add(item)
})


var pre = document.querySelector('pre')


