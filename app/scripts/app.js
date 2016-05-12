'use strict';

/**
 * @ngdoc overview
 * @name myTestAppApp
 * @description
 * # myTestAppApp
 *
 * Main module of the application.
 */
angular
  .module('myTestAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',

        resolve: {
            'appDataPromise': function(appList) {
                return appList.loadData();
            }
        },

        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
