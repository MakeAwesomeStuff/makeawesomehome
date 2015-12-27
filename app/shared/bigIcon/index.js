import angular from 'angular'
import bigIcon from './bigIcon.directive'
import './bigIcon.style.scss'

export default angular.module('directives.bigIcon', [])
  .directive('bigicon', bigIcon)
  .name