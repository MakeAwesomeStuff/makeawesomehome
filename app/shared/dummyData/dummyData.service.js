import angular from 'angular'
import moment from 'moment'

export default class DummyData {
  getTodos() {
    const periods = {
      ONE_WEEKLY: 'ONE_WEEKLY',
      TWO_WEEKLY: 'TWO_WEEKLY',
      THREE_WEEKLY: 'THREE_WEEKLY',
      MONTHLY: 'MONTHLY',
    }
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
      createTodo('Vacuum', periods.ONE_WEEKLY, moment().subtract(15, 'days').toDate(), 'Living Room'),
      createTodo('Sweep (HIDDEN)', periods.ONE_WEEKLY, moment().subtract(1, 'days').toDate(), 'Living Room')
    ]
  }
}