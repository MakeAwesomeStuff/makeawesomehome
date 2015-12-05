import angular from 'angular'
import uirouter from 'angular-ui-router'

import routing from './todos.routes'
import TodosController from './todos.controller'
import dummyData from '../../shared/services/dummyData.service'
import greeting from '../../shared/directives/greeting.directive'

export default angular.module('app.todos', [uirouter, dummyData, greeting])
  .config(routing)
  .controller('TodosController', TodosController)
  .name