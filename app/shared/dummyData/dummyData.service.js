import angular from 'angular'

export default class DummyData {
  getTodos() {
    return [
      {text: 'Clean Shower', done:false},
      {text: 'Clean Kitchen', done:false},
      {text: 'Mop Floor', done:false},
      {text: 'Wash Bedsheets', done:false}
    ]
  }
}