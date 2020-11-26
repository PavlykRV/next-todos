import React from 'react';
import Link from 'next/link'
import {
  Button,
  Container,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
} from '@material-ui/core';
import ArrowBack from '@material-ui/icons/ArrowBackIos';
import { useSelector, useDispatch } from 'react-redux';
import { incrementTicker, decrementTicker } from '../../actions/tickerActions';

const selectTickerValue = (state) => state.ticker.value;

const Ticker = () => {
  const tickerValue = useSelector(selectTickerValue);
  const dispatch = useDispatch();

  return (
    <Container maxWidth='sm'>
      <AppBar position='static'>
        <Toolbar>
          <Link href='/'>
            <ArrowBack />
          </Link>
          <Typography variant='h6'>Ticker</Typography>
        </Toolbar>
      </AppBar>

      <Card>
        <CardContent>
          <Typography color='textSecondary' gutterBottom>
            Counter: {tickerValue}
          </Typography>
        </CardContent>
        <CardActions>
          <ButtonGroup>
            <Button
              variant='contained'
              color='primary'
              onClick={() => dispatch(incrementTicker())}
            >
              +1
            </Button>
            <Button
              variant='contained'
              color='secondary'
              onClick={() => dispatch(decrementTicker())}
            >
              -1
            </Button>
          </ButtonGroup>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Ticker;
