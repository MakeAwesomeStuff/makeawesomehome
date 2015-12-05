routes.$inject = ['$stateProvider']

export default function routes($stateProvider) {
  $stateProvider
    .state('todos', {
      url: '/',
      template: require('./todos.template.html'),
      controller: 'TodosController',
      controllerAs: 'todos'
    })
}