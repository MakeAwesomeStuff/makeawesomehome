import { prop } from 'ramda'

export const ONE_WEEKLY = 'Weekly'
export const TWO_WEEKLY = 'Bi-weekly'
export const THREE_WEEKLY = 'Three Weekly'
export const MONTHLY = 'Monthly'

export function getValue(period) {
  const values = {
    [ONE_WEEKLY]: 60000*60*24*7,
    [TWO_WEEKLY]: 60000*60*24*7 * 2,
    [THREE_WEEKLY]: 60000*60*24*7 * 3,
    [MONTHLY]: 'TODO HANDLE MONTHLY'
  }
  const value = prop(period, values)
  return value
}
