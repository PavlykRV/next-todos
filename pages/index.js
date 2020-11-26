import React from 'react';
import Link from 'next/link';
import {
  Container,
  Typography,
  AppBar,
  Toolbar,
  Button,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

const App = () => {
  return (
    <Container maxWidth='sm'>
      <AppBar position='static'>
        <Toolbar>
          <Link href='/'>
            <HomeIcon />
          </Link>
          <Typography variant='h6'>App Home</Typography>
        </Toolbar>
      </AppBar>
      <Button>
        <Link href='/todos'>Todos</Link>
      </Button>
      <Button>
        <Link href='/ticker'>Ticker</Link>
      </Button>
    </Container>
  );
};

export default App;
