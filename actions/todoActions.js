import actionTypes from './actionTypes';

export const addTodo = (todo) => ({
  type: actionTypes.TODO.ADD_TODO,
  payload: todo,
});

export const removeTodo = (id) => ({
  type: actionTypes.TODO.REMOVE_TODO,
  payload: id,
});

export const updateTodo = ({ id, completed }) => ({
  type: actionTypes.TODO.UPDATE_TODO,
  payload: { id, completed },
});
