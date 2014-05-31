/* Created by frank on 14-5-31. */
var angular = require('angular')
var url = require('./url')

module.exports = angular.module('utils', [])
    .factory('urlUtils', function () {
        return url
    })
