'use strict';

describe('Controller: ViewmovieCtrl', function () {

  // load the controller's module
  beforeEach(module('movieappApp'));

  var ViewmovieCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewmovieCtrl = $controller('ViewmovieCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ViewmovieCtrl.awesomeThings.length).toBe(3);
  });
});
