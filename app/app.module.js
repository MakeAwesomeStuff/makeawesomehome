import 'bootstrap/dist/css/bootstrap.css'
import angular from 'angular'
import todos from './components/todos'
import profile from './components/profile'
import routing from './app.routes.js'
import uirouter from 'angular-ui-router'

angular
  .module('makeawesomehome', [uirouter, todos, profile])
  .config(routing)