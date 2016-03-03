import angular from 'angular'
import DummyData from './dummyData.service'

export default angular.module('services.dummy-data', [])
  .service('dummyData', DummyData)
  .name