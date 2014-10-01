'use strict';

function PremiumPlan() {
  this.name = 'Plan Premium';

  this.satisfiesCondition = function() {
  	return true;
  }
}

angular.module('todoAppApp')
  .factory('PremiumPlan', function(taskRepository){
    return PremiumPlan;
  });

  /*ilimitado*/
