'use strict';

describe('Service: DirtyTask', function () {

  var task;
  beforeEach(inject(function (_DeletedTask_, Task) {
    task = new Task();
    task.setToBeDeleted();
  }));

  describe("when apply changes is called in a deleted task", function() {
 	 var taskRepository, bar = null;

 	 beforeEach(function() {
  		taskRepository = {
 		    delete: function(value) {
  			bar = value;
  			}
 	 	};


	 spyOn(taskRepository, 'delete');
	 	task.applyChanges(taskRepository);

	 });

	 it('should call delete in the taskRepository ', function () {
	 	expect(taskRepository.delete).toHaveBeenCalled();
	 });

	 it('should call delete in the taskRepository with task as parameter', function () {
	 	expect(taskRepository.delete).toHaveBeenCalledWith(task);
	 });

   });
});