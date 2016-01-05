export default function task() {
  return {
    restrict: 'E',
    scope: {
      task: '='
    },
    template: require('./task.template.html')
  }
}