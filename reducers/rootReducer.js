import {combineReducers} from 'redux'
import tickerReducer from './tickerReducer'

const rootReducer = combineReducers({
  ticker: tickerReducer
})

export default rootReducer
