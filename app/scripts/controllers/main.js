'use strict';

/**
 * @ngdoc function
 * @name myTestAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myTestAppApp
 */

(function() {

    function mainController(/*$scope,*/appList) {

        //$scope.apps = appList.getData().apps;

        this.apps = appList.getData().apps;
    }

    angular.module('myTestAppApp')
        .controller('MainCtrl', mainController);

})();
