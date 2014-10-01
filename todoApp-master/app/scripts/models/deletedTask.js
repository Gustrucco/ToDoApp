


function DeletedTask() {
	
	this.changeRepository = function(taskRepository, task) {
          taskRepository.delete(task);
	};

	this.isDirty = function(){
    	return false;
 	 }

  	this.isDeleted = function(){
    	return true;
  	}

   	this.isNew = function(){
  		return false;
  	}
}

angular.module('todoAppApp')
  .factory('DeletedTask', function(){
    return DeletedTask;
  });