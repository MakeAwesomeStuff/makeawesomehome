// This file is an entry point for angular tests
// Avoids some weird issues when using webpack + angular.
import 'angular'
import 'angular-mocks/angular-mocks'

Function.prototype.bind = Function.prototype.bind || function (thisp) {
  let fn = this;
  return function () {
    return fn.apply(thisp, arguments);
  };
};

const testsContext = require.context(".", true, /.test$/)
testsContext.keys().forEach(testsContext)