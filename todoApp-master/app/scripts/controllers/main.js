'use strict';

angular.module('todoAppApp')
  .controller('MainCtrl', function ($window, $scope, taskRepository, Task, BasicPlan, FreePlan, PremiumPlan) {

    // Task CRUD
    $scope.tasks = taskRepository.get();
    $scope.addTask = function(){
      var newTask = new Task({date: new Date().toISOString()});
      $scope.tasks.push(newTask);
      return newTask;
    };
    
    $scope.saveAll = function(){

      if($scope.selectedPlan.satisfiesCondition(taskRepository)){
        $scope.tasks.forEach(function(task){
         task.applyChanges(taskRepository);
        });
        $scope.tasks = taskRepository.get();
      }
      else{
        $window.alert("Debe mejorar su plan");
      }
    };
    $scope.hasChanged = function(){
      return _.some($scope.tasks, function(task){
        return task.isDirty() || task.toBeDeleted();
      });
    };


    // Counters
    $scope.createdCount = function(){
      return taskRepository.createdCount();
    };
    $scope.updatedCount = function(){
      return taskRepository.updatedCount();
    };
    $scope.deletedCount = function(){
      return taskRepository.deletedCount();
    };
    $scope.resetCounters = function(){
      taskRepository.resetCounters();
    };


    // Plans
    var basicPlan = new BasicPlan();
    var freePlan = new FreePlan();
    var premiumPlan = new PremiumPlan();
    $scope.plans = [basicPlan, freePlan, premiumPlan];
    $scope.selectedPlan = basicPlan;


  });
