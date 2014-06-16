angular = require('angular')
require('./utils')

app = angular.module 'rssly', ['utils']
app.config ['$compileProvider', ($compileProvider) ->
  $compileProvider.imgSrcSanitizationWhitelist /^\s*(blob):/
]

module.exports = app
