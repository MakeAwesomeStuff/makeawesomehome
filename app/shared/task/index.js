import angular from 'angular'
import task from './task.directive'
import './task.style.scss'

export default angular.module('directives.task', [])
  .directive('task', task)
  .name