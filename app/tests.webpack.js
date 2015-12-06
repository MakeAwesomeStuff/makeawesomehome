// This file is an entry point for angular tests
// Avoids some weird issues when using webpack + angular.
import 'angular'
import 'angular-mocks/angular-mocks'

Function.prototype.bind = Function.prototype.bind || function (thisp) {
  var fn = this;
  return function () {
    return fn.apply(thisp, arguments);
  };
};

var testsContext = require.context(".", true, /.test$/)
console.log('testsContext', testsContext)
testsContext.keys().forEach(testsContext)