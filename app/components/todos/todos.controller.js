import { reduce } from 'ramda'

export default class TodosController {

  constructor(randomTasks) {
    this.todos = [
      {text: randomTasks.getName(), done:false},
      {text:'Clean Shower', done:false}
    ]
  }

  addTodo() {
    this.todos.push({text:this.todoText, done:false})
    this.todoText = ''
  }

  remaining() {
    return reduce((acc, todo) => todo.done ? acc : acc+1, 0, this.todos)
  }

  archive() {
    var oldTodos = this.todos
    this.todos = []
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) this.todos.push(todo)
    })
  }
}