import angular from 'angular'

class DummyData {
  getTodos() {
    return [
      {text: 'Clean Shower', done:false},
      {text: 'Clean Kitchen', done:false},
      {text: 'Mop Floor', done:false},
      {text: 'Wash Bedsheets', done:false}
    ]
  }
}

export default angular.module('services.dummy-data', [])
  .service('dummyData', DummyData)
  .name