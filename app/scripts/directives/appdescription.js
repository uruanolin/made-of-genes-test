'use strict';

/**
 * @ngdoc directive
 * @name myTestAppApp.directive:appDescription
 * @description
 * # appDescription
 */

(function() {

    function appDescriptionDirective($q, $compile, $templateRequest) {
        return {
            restrict: 'E',

            scope: {},
            controllerAs: 'appDesc',
            templateUrl: '/views/appdescriptiondirective.html',

            controller: function() {
                //this.name = '';
            },

            compile: function( /*tElem , tAttrs*/ ) {


                return {
                    pre: function( /*scope, iElem, iAttrs*/ ) {
                        //$log.debug(name + ': pre link');
                    },
                    post: function(scope, element, attrs) {


                            function isImage(src) {

                                var deferred = $q.defer();

                                var image = new Image();
                                image.onerror = function() {
                                    deferred.resolve(false);
                                };
                                image.onload = function() {
                                    deferred.resolve(true);
                                };
                                image.src = src;

                                return deferred.promise;
                            }

                            //element.text('this is the appDescription directive');
                            scope.appDesc.name = attrs.name;
                            scope.appDesc.desc = attrs.desc;
                            scope.appDesc.img = attrs.img;
                            scope.appDesc.sells = attrs.sells;
                            scope.appDesc.shortDesc = attrs.shortdesc;
                            scope.appDesc.version = attrs.version;
                            scope.appDesc.availableImage = false;


                            scope.availableImage = isImage('/images/' + scope.appDesc.img).then(function(res) {
                                if (res === true) {
                                    scope.appDesc.availableImage = true;
                                }
                            });


                            if (attrs.displaymosaic === 'false') {
                                $templateRequest('/views/appdescriptiondirective2.html').then(function(template) {

                                    element.html(template).show();
                                    $compile(element.contents())(scope);
                                }, function() {
                                    // An error has occurred
                                });
                            }

                        } // -> cierra la post-link function
                };
            },


            // -> si hay compile function se ejecuta la post-link function en vez de esta
            link: function postLink( /*scope, element, attrs*/ ) {




            }
        };
    }

    angular.module('myTestAppApp')
        .directive('appDescription', appDescriptionDirective);
})();
