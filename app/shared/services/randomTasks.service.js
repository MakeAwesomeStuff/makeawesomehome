import angular from 'angular'

class RandomTasks {
  constructor() {
    this.names = [
      'Clean Shower',
      'Clean Kitchen',
      'Mop Floor',
      'Wash Bedsheets'
    ]
  }

  getName() {
    const { names } = this
    const rand = Math.floor(Math.random() * names.length)
    return names[rand]
  }
}

export default angular.module('services.random-names', [])
  .service('randomTasks', RandomTasks)
  .name