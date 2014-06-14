/* Created by frank on 14-5-21. */
var app = require('../app')

app.factory('feedService', function ($http, $q) {
    var url = 'https://ajax.googleapis.com/ajax/services/feed/load'
    return {
        get: function (source, number) {
            var params = {
                v: '2.0',
                q: source,
                num: number || 20
            }
            return $http.get(url, {params: params})
        },
        check: function (source) {
            var params = {
                v: '2.0',
                q: source,
                num: 0
            }
            return $http.get(url, {params: params})
        }
    };
});
