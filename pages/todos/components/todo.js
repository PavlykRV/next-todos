import React from 'react'
import { removeTodo, updateTodo } from '../../../actions/todoActions';
import { useDispatch } from 'react-redux';

const Todo = (props) => {
  const dispatch = useDispatch()

  const handleRemove = () => {
    dispatch(removeTodo(props.id))
  }

  const handleChange = () => {
    dispatch(updateTodo({ id: props.id, completed: !props.completed}))
  }

  return (
    <div>
      <p>{props.title}</p>
      <p>{props.content}</p>
      <p>IsCompleted: {props.completed.toString()}</p>
      <button onClick={handleRemove}>Remove</button>
      <button onClick={handleChange}>Update</button>
    </div>
  )
}

export default Todo
