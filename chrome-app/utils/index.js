/* Created by frank on 14-5-31. */
var angular = require('angular')

module.exports = angular.module('utils', [])
    .factory('url', function ($q) {
        var self = {
            getOrigin: function (url) {
                var match = /^(?:https?:\/\/)?[^/]+/.exec(url)
                return match ? match[0] : null
            }
        }
        return self
    })
