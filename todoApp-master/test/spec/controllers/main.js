'use strict';

describe('Controller: MainCtrl', function () {

  var MainCtrl, scope, newTask;

  var mockedWindow, bar = null;
  // Initialize the controller and a mock scope and a mock window
  beforeEach(inject(function ($controller, $rootScope,taskRepository,MockFalsePlan, PremiumPlan) {
    scope = $rootScope.$new();

    
    mockedWindow = {
        alert: function(value) {
        bar = value;
      }
    };
    newTask = {id: 1, text: 'resolver este ejercicio', date: '2014-09-29T13:03:06.030Z', applyChanges: function(value) {bar = value;}};
    var savedTasks = [newTask];
    
    spyOn(taskRepository, 'get').andReturn(savedTasks);
    spyOn(mockedWindow,'alert');
    spyOn(newTask,'applyChanges');

    MainCtrl = $controller('MainCtrl', {
      $window : mockedWindow,
      $scope: scope,
      taskRepository: taskRepository
    });
  }));

  it('should load tasks on initialization', function () {
    expect(scope.tasks.length).toBe(1);
  });

  it('should add a task on dirty state when addTask is called', function () {
    var newTask = scope.addTask();
    expect(scope.tasks.length).toBe(2);
    expect(newTask.isDirty).toBeTruthy();
  });

  it('should show a window alert when someone tries to save with a plan that does not allowed it', function(){
    scope.selectedPlan = new MockFalsePlan();
    scope.saveAll();
    expect(mockedWindow.alert).toHaveBeenCalled();
  });

  it('should apply changes when someone tries to save with a premium plan', function(){
    scope.selectedPlan = new PremiumPlan();
    scope.saveAll();
    expect(newTask.applyChanges).toHaveBeenCalled();
  });

});
