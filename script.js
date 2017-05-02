var app = angular.module('myModule', []);

app.controller('myController', function($scope) {

  $scope.todoList = [];
  $scope.addItem = function(newTodo) {
    console.log(newTodo);
    $scope.todoList.push(newTodo);
  }

  $scope.remove = function(index) {
  	$scope.todoList.splice(index, 1);
  };
});
