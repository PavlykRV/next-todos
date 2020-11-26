import actionTypes from './actionTypes'

export const incrementTicker = () => ({
  type: actionTypes.TICKER.INCREMENT_TICKER
})

export const decrementTicker = () => ({
  type: actionTypes.TICKER.DECREMENT_TICKER
})
