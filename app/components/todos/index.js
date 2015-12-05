import angular from 'angular'
import uirouter from 'angular-ui-router'

import routing from './todos.routes'
import TodosController from './todos.controller'
import randomTasks from '../../shared/services/randomTasks.service';

export default angular.module('app.todos', [uirouter, randomTasks])
  .config(routing)
  .controller('TodosController', TodosController)
  .name