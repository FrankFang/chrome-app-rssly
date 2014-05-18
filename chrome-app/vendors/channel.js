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

exports.renderBlog = function (feed) {
    var template = document.importNode(document.querySelector('#channel').content)
    template.querySelector('h1').innerText = feed.title
    template.querySelector('h2').innerText = feed.description
    template.querySelector('h1').setAttribute('data-link', feed.link)
    return template
}

exports.renderEntries = function (feed) {
    var result = []
    var entries = feed.entries
    entries.forEach(function (entry, index) {
        var template = document.importNode(document.querySelector('#entry').content)
        template.querySelector('h1').innerText = entry.title
        template.querySelector('.link').href = entry.link
        template.querySelector('time').innerText = entry.publishedDate
        template.querySelector('article').innerHTML = entry.content
        template.querySelector('.author').innerText = entry.author
        template.querySelector('aside').innerText = entry.categories.toString()
        result.push(template)

    })

    return result

}