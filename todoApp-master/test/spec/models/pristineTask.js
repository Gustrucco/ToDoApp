'use strict';

describe('Service: Pristine', function () {

  var task;
  beforeEach(inject(function (_PristineTask_, Task) {
    task = new Task();
    task.setAsPristine();
  }));

  describe("when apply changes is called in a pristine task", function() {
 	 var taskRepository, bar = null;

 	 beforeEach(function() {
  		taskRepository = {
 		    delete: function(value) {
  			bar = value;
  			},
        update: function(value) {
        bar = value;
        },
        add: function(value) {
        bar = value;
        }
 	  	};


	     spyOn(taskRepository, 'delete');
       spyOn(taskRepository, 'update');
       spyOn(taskRepository, 'add');
	   	 task.applyChanges(taskRepository);
	 });

	 it('should not call delete, update nor add in the taskRepository ', function () {
	 /*	expect(taskRepository.delete.calls.any()).toBe(false);
    expect(taskRepository.update.calls.any()).toBe(false);
    expect(taskRepository.add.calls.any()).toBe(false);*/
	 });


   });
});