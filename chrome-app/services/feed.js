/* Created by frank on 14-5-21. */
var app = require('../app')

app.factory('feedService', function ($http, $q) {
    var url = 'https://ajax.googleapis.com/ajax/services/feed/load'
    var canceler

    return {
        getExclusively: function (source, number) {
            if (canceler) {
                canceler.resolve()
            }
            canceler = $q.defer()
            var params = {
                v: '2.0',
                q: source,
                num: number || 20
            }

            return $http.get(url, {params: params,
                timeout: canceler.promise
            })
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
