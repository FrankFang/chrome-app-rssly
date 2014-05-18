document.body.style.background = 'red'

var xhr = new XMLHttpRequest()
xhr.onreadystatechange = function (a, b, c) {
    console.log('onready')
    console.log("a,b,c:")
    console.log(a, b, c)
}
xhr.open('GET', 'http://localhost:8080/feeds.xml')