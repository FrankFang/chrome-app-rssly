/* Created by frank on 14-5-19. */
var app = require('../app.js')

app.controller('ctrlFeeds',
    function ($scope, $rootScope, $http, $timeout, url, $sce) {

        $scope.list = []

        chrome.storage.local.get(function (response) {
            var list = response.feeds || []
            if (list.length === 0) {
                list.push({title: 1, url: 'http://www.ruanyifeng.com/blog/atom.xml'})
                list.push({title: 2, url: 'http://www.ruanyifeng.com/blog/atom.xml'})
            }

            list.forEach(function (item, index) {
                $scope.getFavicon(url.getOrigin(item.url))
                    .then(function (response) {
                        list[index].icon = $sce.trustAs($sce.RESOURCE_URL, URL.createObjectURL(response.data));
                        $scope.list.push(list[index])
                    })
            })
        })

        $scope.newItem = ''

        $scope.addItem = function () {
            if ($scope.newItem === undefined) { return }
            var newItem = $scope.newItem.trim()
            if (newItem === '') {return}
            $scope.list.push({url: newItem})
            $rootScope.$broadcast('query:channel', $scope.newItem)
            $scope.newItem = ''
        }

        $scope.expendItem = function () {
            $scope.expend = !$scope.expend
        }

        $scope.removeItem = function (index) {
            $scope.list.splice(index, 1);
        }

        $scope.$watch('list', function (value) {
            chrome.storage.local.set({'feeds': value})
        }, true)

        $scope.open = false

        $scope.toggle = function () {
            $scope.open = !$scope.open
        }

        $scope.getFavicon = function (origin) {
            var iconSrc = origin + '/favicon.ico'
            return $http({
                method: 'GET',
                url: iconSrc,
                responseType: 'blob'
            })
        }

    }
)
