routes.$inject = ['$stateProvider']

export default function routes($stateProvider) {
  $stateProvider
    .state('profile', {
      url: '/profile',
      template: require('./profile.template.html'),
      controller: 'ProfileController',
      controllerAs: 'profile'
    })
}