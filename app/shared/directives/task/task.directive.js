export default function task() {
  return {
    restrict: 'E',
    scope: {
      task: '=',
      model: '='
    },
    template: require('./task.template.html')
  }
}