'use strict';

describe('Directive: appDescription', function () {

  // load the directive's module
  beforeEach(module('myTestAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<app-description></app-description>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the appDescription directive');
  }));
});
