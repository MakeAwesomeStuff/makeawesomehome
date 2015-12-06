routes.$inject = ['$stateProvider']

export default function routes($stateProvider) {
  $stateProvider
    .state('subview', {
      url: '/subview',
      template: require('./subview.template.html'),
      controller: 'SubviewController',
      controllerAs: 'subview'
    })
}