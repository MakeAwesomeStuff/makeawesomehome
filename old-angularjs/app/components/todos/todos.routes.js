routes.$inject = ['$stateProvider']

export default function routes($stateProvider) {
  $stateProvider
    .state('todos', {
      url: '/',
      template: require('./todos.template.html'),
      controller: 'TodosController',
      controllerAs: 'todos'
    })
    .state('todos.subview', {
      url: '/todos/subview',
      template: require('../subview/subview.template.html'),
      controller: 'SubviewController',
      controllerAs: 'subview'
    })
}