import subview from './index'

describe('Controller: subview', function() {
  console.log('2')
  let $controller

  beforeEach(angular.mock.module(subview))

  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_
  }))

  it('subview is initialized', function() {
    let ctrl = $controller('SubviewController')
    expect(true).toBe(true)
  })
  console.log('2.1')
})