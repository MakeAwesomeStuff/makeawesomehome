import { append, reduce, filter, slice } from 'ramda'
import * as periods from '../../constants/periods'

export default class TodosController {

  constructor($scope, dummyData) {
    const now = new Date()
    const wasCleaned = (t) => (now - t.lastCleaned || 0) > periods.getValue(t.period)
    this.scope = $scope
    this.scope.activeTasks = slice(0, 3, filter(wasCleaned, dummyData.getTodos()))
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