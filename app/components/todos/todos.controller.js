import { reduce, filter } from 'ramda'

export default class TodosController {

  constructor(dummyData) {
    this.todos = dummyData.getTodos()
    this.name = "David"
  }

  addTodo() {
    this.todos.push({text:this.todoText, done:false})
    this.todoText = ''
  }

  remaining() {
    return reduce((acc, todo) => todo.done ? acc : acc+1, 0, this.todos)
  }

  archive() {
    this.todos = filter((todo)=>!todo.done, this.todos)
  }
}