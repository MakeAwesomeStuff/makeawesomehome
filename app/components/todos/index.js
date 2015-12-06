import angular from 'angular'
import uirouter from 'angular-ui-router'

import routing from './todos.routes'
import TodosController from './todos.controller'
import dummyData from '../../shared/services/dummyData.service'
import task from '../../shared/directives/task'

export default angular
  .module(
    'makeawesomehome.todos',
    [uirouter, dummyData, task]
  )
  .config(routing)
  .controller('TodosController', TodosController)
  .name