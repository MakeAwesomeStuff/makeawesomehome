export default function bigIcon() {
  return {
    restrict: 'E',
    scope: {
      icon: '@' // e.g. ok (as in glyphicon-ok)
    },
    template: require('./bigIcon.template.html')
  }
}