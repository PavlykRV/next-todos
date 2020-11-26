import { useSelector } from 'react-redux'

export const useTodoSelect = () => useSelector((state) => state.todos);