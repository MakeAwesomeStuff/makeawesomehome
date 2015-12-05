import todos from './index'

describe('Controller: Todos', function() {
  let $controller

  beforeEach(angular.mock.module(todos))

  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_
  }))

  it('todos is initialized', function() {
    let ctrl = $controller('TodosController')
    expect(ctrl.name).toBe('David')
  })
})