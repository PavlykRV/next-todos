import actionTypes from '../actions/actionTypes';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  value: 0,
};

const tickerReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case actionTypes.TICKER.INCREMENT_TICKER:
      return { ...state, value: state.value + 1 };
    case actionTypes.TICKER.DECREMENT_TICKER:
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};

export default tickerReducer;
