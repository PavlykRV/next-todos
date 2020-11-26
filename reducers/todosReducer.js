import actionTypes from '../actions/actionTypes';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = [
  {
    id: new Date().getTime(),
    title: 'Some initial todo title',
    content: 'Some initial todo content',
    completed: false,
  },
];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case actionTypes.TODO.ADD_TODO:
      return [...state, action.payload];
    case actionTypes.TODO.REMOVE_TODO:
      return [...state.filter((todo) => todo.id !== action.payload)];
    case actionTypes.TODO.UPDATE_TODO:
      return [
        ...state.map((todo) => {
          if (todo.id === action.payload.id) {
            todo.completed = action.payload.completed;
          }
          return todo;
        }),
      ];
    default:
      return state;
  }
};

export default todosReducer;
