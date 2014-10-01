'use strict';

function MockFalsePlan() {
  this.name = 'Plan Mockeado';

  this.satisfiesCondition = function() {
  	return false;
  }
}

angular.module('todoAppApp')
  .factory('MockFalsePlan', function(taskRepository){
    return MockFalsePlan;
  });