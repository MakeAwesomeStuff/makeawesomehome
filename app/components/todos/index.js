import angular from 'angular'
import uirouter from 'angular-ui-router'

import routing from './todos.routes'
import TodosController from './todos.controller'

export default angular.module('app.todos', [uirouter])
  .config(routing)
  .controller('TodosController', TodosController)
  .name