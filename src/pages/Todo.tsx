import { useState } from 'react'
import TodoItem from '../components/Todo/TodoItem'
import AddTodo from '../components/Todo/AddTodo'

export default function Todo() {
  const [todos, setTodos] = useState()
  return (
    <div>
      <AddTodo />
      <ol>
        <TodoItem />
      </ol>
    </div>
  )
}
