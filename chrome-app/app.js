var $ = require('jquery')


var xhr = new XMLHttpRequest()
xhr.onreadystatechange = function () {
    if (xhr.status === 200 && xhr.readyState === 4) {
        var xml = xhr.responseText
        console.log(xml)
    }
}

xhr.open('GET', 'https://ajax.googleapis.com/ajax/services/feed/load?v=2.0&q=http://phys.org/rss-feed/&num=20')
xhr.send(null)
