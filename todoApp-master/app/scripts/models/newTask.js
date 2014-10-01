

function NewTask() {
	
	this.changeRepository = function(taskRepository, task) {
    taskRepository.add(task);
	};

	this.isDirty = function(){
    	return true;
 	 }

  	this.isDeleted = function(){
    	return false;
  	}

  	this.isNew = function(){
  		return true;
  	}
}

angular.module('todoAppApp')
  .factory('NewTask', function(){
    return NewTask;
  });