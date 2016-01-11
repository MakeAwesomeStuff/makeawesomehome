import angular from 'angular'
import moment from 'moment'
import * as periods from '../../constants/periods'

export default class DummyData {
  getTodos() {
    const createTodo = (text, period, lastCleaned, location) => (
      {
        title: text,
        done: false,
        period: period,
        lastCleaned: lastCleaned,
        location: location
      }
    )
    const createDate = (daysAgo) => moment().subtract(daysAgo, 'days').toDate()
    // (HIDDEN) implies they should not be seen
    return [
      createTodo('Clean Shower (HIDDEN)', periods.ONE_WEEKLY, createDate(3), 'Bathroom'),
      createTodo('Clean Toilet', periods.ONE_WEEKLY, null, 'Bathroom'),
      createTodo('Mop Floor', periods.ONE_WEEKLY, createDate(9), 'Kitchen'),
      createTodo('Vacuum (HIDDEN)', periods.TWO_WEEKLY, createDate(9), 'Living Room'),
      createTodo('Sweep (HIDDEN)', periods.ONE_WEEKLY, createDate(1), 'Living Room'),
      createTodo('Clean Kitchen Cupboard', periods.THREE_WEEKLY, null, 'Kitchen'),
      createTodo('Vacuum', periods.ONE_WEEKLY, createDate(19), 'Bedroom'),
      createTodo('Sweep', periods.ONE_WEEKLY,  createDate(19), 'Living Room'),
      createTodo('Dust', periods.THREE_WEEKLY, createDate(9), 'Living Room'),
      createTodo('Wash Towels', periods.TWO_WEEKLY, null, 'Bathroom')
    ]
  }
}