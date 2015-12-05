import 'bootstrap/dist/css/bootstrap.css';
import angular from 'angular';
import routing from './app.route.js';
import uirouter from 'angular-ui-router';

angular.module('todoApp', [uirouter])
  .config(routing)
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [
      {text:'Mop Floor', done:false},
      {text:'Clean Shower', done:false}];

    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
    };

    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  });