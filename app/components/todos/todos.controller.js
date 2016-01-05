import { append, reduce, filter } from 'ramda'

export default class TodosController {

  constructor($scope, dummyData) {
    this.scope = $scope
    // Assume only period is one_week for the moment
    const now = new Date()
    const oneWeek = 60000*60*24*7
    const wasCleanedOverWeekAgo = (t) => (now - t.lastCleaned || 0) > oneWeek
    this.scope.activeTasks = filter(wasCleanedOverWeekAgo, dummyData.getTodos())
    this.name = "David"
  }

  addTodo() {
    append({text:this.todoText, done:false}, this.scope.activeTasks)
    this.todoText = ''
  }

  remaining() {
    return reduce((acc, todo) => todo.done ? acc : acc+1, 0, this.scope.activeTasks)
  }

  archive() {
    this.scope.activeTasks = filter((todo)=>!todo.done, this.scope.activeTasks)
  }
}