import profile from './index'

describe('Controller: profile', function() {
  let $controller

  beforeEach(angular.mock.module(profile))

  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_
  }))

  it('profile is initialized', function() {
    let ctrl = $controller('ProfileController')
    expect(true).toBe(true)
  })
})