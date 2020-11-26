import React from 'react';
import cx from 'classnames'
import { removeTodo, updateTodo } from '../../../../../../actions/todoActions';
import { useDispatch } from 'react-redux';
import {
  Typography,
  Paper,
  Checkbox,
  IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './Todo.scss';

const Todo = (props) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeTodo(props.id));
  };

  const handleChange = () => {
    dispatch(updateTodo({ id: props.id, completed: !props.completed }));
  };

  return (
    <Paper className={cx(styles.wrapper, {[styles.active]: props.completed})}>
      <div className={styles.content}>
        <Typography variant='h6' gutterBottom>
          {props.title}
        </Typography>
        <Typography variant='body1' gutterBottom>
          {props.content}
        </Typography>
      </div>
      <div className={styles.actions}>
        <Checkbox
          checked={props.completed}
          onChange={handleChange}
          color='primary'
        />
        <IconButton onClick={handleRemove} color='secondary'>
          <DeleteIcon />
        </IconButton>
      </div>
    </Paper>
  );
};

export default Todo;
