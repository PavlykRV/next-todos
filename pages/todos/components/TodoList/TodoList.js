import React from 'react';
import { Typography } from '@material-ui/core';
import Todo from './components/TodoItem/Todo';
import useTodoSelect from '../../selectors/todos';

const TodosList = () => {
  const todos = useTodoSelect();
  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div>
      {activeTodos.length > 0 && (
        <Typography variant='h6' gutterBottom>
          Active todos:
        </Typography>
      )}

      {activeTodos.map(({ id, title, content, completed }) => (
        <Todo
          key={id}
          id={id}
          title={title}
          content={content}
          completed={completed}
        />
      ))}
      {completedTodos.length > 0 && (
        <Typography variant='h6' gutterBottom>
          Completed todos:
        </Typography>
      )}

      {completedTodos.map(({ id, title, content, completed }) => (
        <Todo
          key={id}
          id={id}
          title={title}
          content={content}
          completed={completed}
        />
      ))}
    </div>
  );
};

export default TodosList;
