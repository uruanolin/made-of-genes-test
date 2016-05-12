'use strict';

/**
 * @ngdoc service
 * @name myTestAppApp.appList
 * @description
 * # appList
 * Service in the myTestAppApp.
 */

(function() {

    function appList($http, $q) {

        var data;

        function loadData() {

            return $http.get('/json/applications.json', {
                    params: {}
                })
                .then(function(response) {

                    data = response.data;
                    return response.data;
                }, function(response) {
                    return $q.reject(response);
                });
        }

        function getData() {
            return data;
        }

        return {
            loadData: loadData,
            getData: getData
        };
    }

    angular.module('myTestAppApp')
        .service('appList', appList);

})();

/*



*/
