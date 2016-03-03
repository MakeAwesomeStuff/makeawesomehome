import angular from 'angular'
import uirouter from 'angular-ui-router'

import routing from './todos.routes'
import TodosController from './todos.controller'
import dummyData from '../../shared/dummyData'
import task from '../../shared/task'

export default angular
  .module(
    'makeawesomehome.todos',
    [uirouter, dummyData, task]
  )
  .config(routing)
  .controller('TodosController', TodosController)
  .name