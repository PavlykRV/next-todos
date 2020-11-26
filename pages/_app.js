import React from 'react';
import { wrapper } from '../store/store';
import actiontypes from '../actions/actionTypes'

const TodoApp = ({ Component, pageProps }) => {

  return <Component {...pageProps} />;
};

export default wrapper.withRedux(TodoApp);
