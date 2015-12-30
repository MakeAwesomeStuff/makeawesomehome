export default function task() {
  return {
    restrict: 'E',
    scope: {
      task: '=',
      location: '='
    },
    template: require('./task.template.html')
  }
}