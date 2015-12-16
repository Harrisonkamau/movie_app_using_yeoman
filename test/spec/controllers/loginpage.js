'use strict';

describe('Controller: LoginpageCtrl', function () {

  // load the controller's module
  beforeEach(module('movieappApp'));

  var LoginpageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoginpageCtrl = $controller('LoginpageCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LoginpageCtrl.awesomeThings.length).toBe(3);
  });
});
