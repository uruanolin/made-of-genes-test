'use strict';

describe('Service: appList', function () {

  // load the service's module
  beforeEach(module('myTestAppApp'));

  // instantiate service
  var appList;
  beforeEach(inject(function (_appList_) {
    appList = _appList_;
  }));

  it('should do something', function () {
    expect(!!appList).toBe(true);
  });

});
