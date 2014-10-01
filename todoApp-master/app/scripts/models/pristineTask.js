

function PristineTask() {
	
	this.changeRepository = function(taskRepository, task) {
          /*No hace nada*/
	};

	this.isDirty = function(){
    	return false;
 	 }

  	this.isDeleted = function(){
    	return false;
  	}

  	this.isNew = function(){
  		return false;
  	}
}

angular.module('todoAppApp')
  .factory('PristineTask', function(){
    return PristineTask;
  });