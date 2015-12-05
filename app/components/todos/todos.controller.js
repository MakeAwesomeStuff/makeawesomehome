export default class TodosController {

  constructor() {
    this.todos = [
      {text:'Mop Floor', done:false},
      {text:'Clean Shower', done:false}
    ]
  }

  addTodo() {
    this.todos.push({text:this.todoText, done:false})
    this.todoText = ''
  }

  remaining() {
    var count = 0
    angular.forEach(this.todos, function(todo) {
      count += todo.done ? 0 : 1
    })
    return count
  }

  archive() {
    var oldTodos = this.todos
    this.todos = []
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) this.todos.push(todo)
    })
  }
}