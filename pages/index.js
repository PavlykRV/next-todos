import React from 'react';
import Link from 'next/link';
import { Container, Typography, AppBar, Toolbar } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import BugReportIcon from '@material-ui/icons/BugReport';
import styles from './styles.scss';

const App = () => {
  return (
    <Container maxWidth='sm' className={styles.appWrapper}>
      <AppBar position='static'>
        <Toolbar>
          <Link href='/'>
            <HomeIcon />
          </Link>
          <Typography variant='h6'>App Home</Typography>
        </Toolbar>
      </AppBar>
      <div className={styles.linksWrapper}>
        <Link href='/todos'>
          <div className={styles.pallete}>
            <FormatListNumberedIcon fontSize='large' />
            <Typography variant='h4' gutterBottom>
              Todos
            </Typography>
          </div>
        </Link>
        <Link href='/ticker'>
          <div className={styles.pallete}>
            <BugReportIcon fontSize='large' />
            <Typography variant='h4' gutterBottom>
              Ticker
            </Typography>
          </div>
        </Link>
      </div>
    </Container>
  );
};

export default App;
