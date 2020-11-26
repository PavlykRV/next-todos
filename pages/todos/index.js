import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import {
  Container,
  Typography,
  AppBar,
  Toolbar,
} from '@material-ui/core';
import ArrowBack from '@material-ui/icons/ArrowBackIos';
import Form from './components/Form/Form';
import TodosList from './components/TodoList/TodoList';

import { useTodoSelect } from './selectors/todos'

const Todos = () => {
  const todos = useTodoSelect();

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

      <Form />
      <TodosList />
    </Container>
  );
};

export default Todos;
