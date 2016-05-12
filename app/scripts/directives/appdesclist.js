'use strict';

/**
 * @ngdoc directive
 * @name myTestAppApp.directive:appDescList
 * @description
 * # appDescList
 */
angular.module('myTestAppApp')
    .directive('appDescList', function() {
        return {
            templateUrl: '/views/appdesclistdirective.html',
            restrict: 'E',
            scope: {
                apps: '=apps',
                h: '@hola'
            },
            controllerAs: 'appDescList',

            controller: function($scope) {
                var appDescList = this;
                appDescList.apps = $scope.apps;
                appDescList.sortreverse = false;
                appDescList.search = {};
                appDescList.search.name = '';
                appDescList.sortButtonText = 'Sort desc.';
                appDescList.displayMosaic = true;
            },

            link: function postLink(scope/*, element, attrs*/) {

                scope.appDescList.sort = function () {
                    scope.appDescList.sortReverse = !scope.appDescList.sortReverse;
                };

                scope.appDescList.displayAsMosaic = function () {
                    scope.appDescList.displayMosaic = true;
                };
                scope.appDescList.displayAsList = function () {
                    scope.appDescList.displayMosaic = false;

                };
            }
        };
    });
