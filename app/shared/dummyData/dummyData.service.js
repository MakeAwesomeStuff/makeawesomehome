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
    // (HIDDEN) implies they should not be seen
    return [
      createTodo('Clean Shower (HIDDEN)', periods.ONE_WEEKLY, moment().subtract(3, 'days').toDate(), 'Bathroom'),
      createTodo('Clean Toilet', periods.ONE_WEEKLY, null, 'Bathroom'),
      createTodo('Mop Floor', periods.ONE_WEEKLY, moment().subtract(9, 'days').toDate(), 'Kitchen'),
      createTodo('Vacuum (HIDDEN)', periods.TWO_WEEKLY, moment().subtract(9, 'days').toDate(), 'Living Room'),
      createTodo('Sweep (HIDDEN)', periods.ONE_WEEKLY, moment().subtract(1, 'days').toDate(), 'Living Room')
    ]
  }
}