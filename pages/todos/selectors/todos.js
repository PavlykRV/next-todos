import { useSelector } from 'react-redux'

const useTodoSelect = () => useSelector((state) => state.todos);

export default useTodoSelect
