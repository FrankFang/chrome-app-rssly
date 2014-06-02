var angular = require('angular')
require('./utils')

var app = angular.module('rssly', ['utils'])
app.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(blob):/);
}])

module.exports = app
