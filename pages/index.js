import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { incrementTicker, decrementTicker } from '../actions/tickerActions'

const selectTickerValue = (state) => state.ticker.value

const App = () => {
  const tickerValue = useSelector(selectTickerValue)
  const dispatch = useDispatch()

  return (
    <div>
      <p>Counter: {tickerValue}</p>
      <button onClick={() => dispatch(incrementTicker())}>+1</button>
      <button onClick={() => dispatch(decrementTicker())}>-1</button>
    </div>
  )
}

export default App
