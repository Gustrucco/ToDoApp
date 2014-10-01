

function DirtyTask() {
	
	this.changeRepository = function(taskRepository, task) {
		taskRepository.update(task);
	};

	this.isDirty = function(){
    	return true;
 	 }

  	this.isDeleted = function(){
    	return false;
  	}

  	this.isNew = function(){
  		return false;
  	}
}

angular.module('todoAppApp')
  .factory('DirtyTask', function(){
    return DirtyTask;
  });