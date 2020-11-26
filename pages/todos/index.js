import React from 'react';
import Link from 'next/link'
import {
  Container,
  Typography,
  AppBar,
  Toolbar,
} from '@material-ui/core';
import ArrowBack from '@material-ui/icons/ArrowBackIos';

const Todos = () => {
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
    </Container>
  );
};

export default Todos;
