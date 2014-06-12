/* Created by frank on 14-6-2. */
var app = require('../app')

module.exports = app.directive(
    'ffArticle',
    function ($timeout, $parse, urlUtils, $http, $sce) {
        return {
            restrict: 'E',
            scope: true,
            templateUrl: 'articles/template.html',
            link: {
                post: function ($scope, $element, $attrs) {
                    var publishedDate = new Date($scope.article.publishedDate)
                    publishedDate = publishedDate.toLocaleDateString()
                    $scope.article.publishedDate = publishedDate
                }
            }
        }
    }
)
