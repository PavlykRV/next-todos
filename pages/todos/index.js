import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import {
  Container,
  Typography,
  AppBar,
  Toolbar,
  TextField,
} from '@material-ui/core';
import ArrowBack from '@material-ui/icons/ArrowBackIos';
import Todo from './components/todo';
import { addTodo } from '../../actions/todoActions';

const selectTodos = (state) => state.todos;

const Todos = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

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
    <Container maxWidth='sm'>
      <AppBar position='static'>
        <Toolbar>
          <Link href='/'>
            <ArrowBack />
          </Link>
          <Typography variant='h6'>Todos</Typography>
        </Toolbar>
      </AppBar>
      <div>
        <form noValidate autoComplete='off' onSubmit={handleFormSubmit}>
          <TextField
            id='standard-basic'
            label='Add title'
            fullWidth
            margin='normal'
          />
          <TextField
            id='standard-basic'
            label='Add message'
            fullWidth
            margin='normal'
          />
          <input type='submit' value='Add' />
        </form>
      </div>
      <div>
        {todos.map(({ id, title, content, completed }) => (
          <Todo
            key={id}
            id={id}
            title={title}
            content={content}
            completed={completed}
          />
        ))}
      </div>
    </Container>
  );
};

export default Todos;
