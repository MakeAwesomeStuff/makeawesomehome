import angular from 'angular'

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
        text: text,
        done: false,
        period: period,
        lastCleaned: lastCleaned,
        location: location
      }
    )
    return [
      createTodo('Clean Shower', periods.ONE_WEEKLY, null, 'Bathroom'),
      createTodo('Clean Toilet', periods.ONE_WEEKLY, null, 'Bathroom'),
      createTodo('Mop Floor', periods.ONE_WEEKLY, null, 'Kitchen'),
      createTodo('Vacuum', periods.ONE_WEEKLY, null, 'Living Room'),
      createTodo('Sweep', periods.ONE_WEEKLY, null, 'Living Room')
    ]
  }
}