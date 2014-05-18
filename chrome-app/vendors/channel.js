/* Created by frank on 14-5-18. */
exports.get = function (source, cb) {
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.status === 200 && xhr.readyState === 4) {
            var result = JSON.parse(xhr.responseText)
            if (result.responseData && result.responseData.feed) {
                cb(null, result.responseData.feed)
            } else {
                cb(new Error('no feed'))
            }
        }
    }

    xhr.open('GET', 'https://ajax.googleapis.com/ajax/services/feed/load?v=2.0&num=20&q=' + encodeURIComponent(source))
    xhr.send(null)
}

exports.render = function (feed) {
    var template = document.querySelector('#channel').content
    template.querySelector('h1').innerText = feed.title
    template.querySelector('h2').innerText = feed.description
    template.querySelector('a').href = feed.link
    return template
}