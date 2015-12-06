import angular from 'angular';

function task() {
  return {
    restrict: 'E',
    scope: {
      task: '=',
      model: '='
    },
    template: require('./task.template.html')
  }
}

export default angular.module('directives.task', [])
  .directive('task', task)
  .name;