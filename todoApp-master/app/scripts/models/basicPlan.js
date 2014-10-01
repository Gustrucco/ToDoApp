'use strict';

function BasicPlan() {
  this.name = 'Plan Basico';
  this.maximoEliminaciones = 50;
  this.maximoEdiciones = 50;
  this.maximoCreaciones = 50;


  this.satisfiesCondition = function(taskRepository) {
  	return this.maximoCreaciones > taskRepository.createdCount() && this.maximoEdiciones > taskRepository.updatedCount() && this.maximoEliminaciones > taskRepository.deletedCount();
  }
}

angular.module('todoAppApp')
  .factory('BasicPlan', function(){
    return BasicPlan;
  });

  /* permite hasta 50 creaciones, hasta 50 ediciones y hasta 50 eliminaciones.*/
