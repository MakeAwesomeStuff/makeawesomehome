import angular from 'angular'
import uirouter from 'angular-ui-router'

import routing from './subview.routes'
import SubviewController from './subview.controller'

export default angular.module('makeawesomehome.subview', [uirouter])
  .config(routing)
  .controller('SubviewController', SubviewController)
  .name