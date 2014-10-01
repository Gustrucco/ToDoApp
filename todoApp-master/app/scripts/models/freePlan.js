'use strict';

function FreePlan() {
  this.name = 'Plan Gratuito';
  this.maximoEliminaciones = 5;
  this.maximoCreacionesYEditaciones = 20;



  this.satisfiesCondition = function(taskRepository) {
  	return this.maximoCreacionesYEditaciones > (taskRepository.createdCount() + taskRepository.updatedCount()) && this.maximoEliminaciones > taskRepository.deletedCount();
  }
}

angular.module('todoAppApp')
  .factory('FreePlan', function(){
    return FreePlan;
  });

/*permite un máximo de 20 creaciones + editaciones, y no más de 5 eliminaciones.*/