import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@material-ui/core';

import { addTodo } from '../../../../actions/todoActions';
import useTodoSelect from '../../selectors/todos'

import styles from './Form.scss';

const Form = () => {
  const dispatch = useDispatch();
  const todos = useTodoSelect();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const title = event.target[0].value;
    const content = event.target[1].value;
    const isExist = todos.find((todo) => todo.title === title);

    if (isExist) {
      return console.log('Please provide new title');
    }

    const todo = {
      id: new Date().getTime(),
      title,
      content,
      completed: false,
    };

    dispatch(addTodo(todo));
  };
  return (
    <div className={styles.formWrapper}>
      <form noValidate autoComplete='off' onSubmit={handleFormSubmit}>
        <TextField
          id='title'
          label='Add todo title'
          fullWidth
          margin='normal'
        />
        <TextField
          id='content'
          label='Add todo message'
          fullWidth
          margin='normal'
        />
        <input type='submit' value='Add todo' className={styles.submitBtn} />
      </form>
    </div>
  );
};

export default Form;
