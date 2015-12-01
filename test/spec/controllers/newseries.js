'use strict';

describe('Controller: NewseriesCtrl', function () {

  // load the controller's module
  beforeEach(module('movieappApp'));

  var NewseriesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewseriesCtrl = $controller('NewseriesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewseriesCtrl.awesomeThings.length).toBe(3);
  });
});
