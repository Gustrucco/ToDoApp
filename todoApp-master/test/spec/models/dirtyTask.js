'use strict';

describe('Service: DirtyTask', function () {

  var task;
  beforeEach(inject(function (_DirtyTask_, Task) {
    task = new Task();
    task.setAsDirty();
  }));

  describe("when apply changes is called in a dirty task", function() {
 	 var taskRepository, bar = null;

 	 beforeEach(function() {
  		taskRepository = {
 		    update: function(value) {
  			bar = value;
  			}
 	 	};


	 spyOn(taskRepository, 'update');
	 	task.applyChanges(taskRepository);

	 });

	 it('should call update in the taskRepository ', function () {
	 	expect(taskRepository.update).toHaveBeenCalled();
	 });

	 it('should call update in the taskRepository with task as parameter', function () {
	 	expect(taskRepository.update).toHaveBeenCalledWith(task);
	 });

   });
});
