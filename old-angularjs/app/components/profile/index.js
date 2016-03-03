import angular from 'angular'
import uirouter from 'angular-ui-router'

import routing from './profile.routes'
import ProfileController from './profile.controller'

export default angular.module('makeawesomehome.profile', [uirouter])
  .config(routing)
  .controller('ProfileController', ProfileController)
  .name