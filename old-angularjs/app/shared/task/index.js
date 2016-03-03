import angular from 'angular'
import task from './task.directive'
import bigIcon from '../bigIcon'
import './task.style.scss'

export default angular.module('directives.task', [bigIcon])
  .directive('task', task)
  .name