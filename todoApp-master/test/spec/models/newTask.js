'use strict';

describe('Service: NewTask', function () {

  var task;
  beforeEach(inject(function (_NewTask_, Task) {
    task = new Task();
  }));

  describe("when apply changes is calles in a new task", function() {
 	 var taskRepository, bar = null;

 	 beforeEach(function() {
  		taskRepository = {
 		    add: function(value) {
  			bar = value;
  			}
 	 	};


	 spyOn(taskRepository, 'add');
	 	task.applyChanges(taskRepository);

	 });

	 it('should call add in the taskRepository ', function () {
	 	expect(taskRepository.add).toHaveBeenCalled();
	 });

	 it('should call add in the taskRepository with task as parameter', function () {
	 	expect(taskRepository.add).toHaveBeenCalledWith(task);
	 });

   });
});





