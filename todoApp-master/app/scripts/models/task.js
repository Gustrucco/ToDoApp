'use strict';



angular.module('todoAppApp')
  .factory('Task', function(NewTask, DeletedTask, PristineTask, DirtyTask){
      return function Task(json) {
        _.extend(this, json);

        if(json && json.id){
          this.state = new PristineTask();
        }
        else{
           this.state = new NewTask();
        }

        this.applyChanges = function(taskRepository){
          this.state.changeRepository(taskRepository,this);
        };

        this.isDirty = function(){
          return this.state.isDirty();
        }

        this.toBeDeleted = function(){
          return this.state.isDeleted();
        }

        this.isNew = function(){
          return this.state.isNew();
        }

        this.setAsDirty = function() {
          this.state = new DirtyTask();
        };

        this.setAsPristine = function() {
          this.state = new PristineTask();
        };

        this.setToBeDeleted = function() {
          this.state = new DeletedTask();
        };

     };
  });
