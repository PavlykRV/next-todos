import {combineReducers} from 'redux'
import tickerReducer from './tickerReducer'
import todosReducer from './todosReducer'

const rootReducer = combineReducers({
  ticker: tickerReducer,
  todos: todosReducer
})

export default rootReducer
