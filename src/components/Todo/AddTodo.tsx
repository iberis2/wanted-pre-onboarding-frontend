import { useState } from 'react'
import { createTodo } from '../../apis/todo'

export type TodoItemType = {
  id: number
  todo: string
  isCompleted: boolean
  userId: number
}

export type TodoType = TodoItemType[]

type AddTodoProps = {
  addTodo: (newTodo: TodoItemType) => void
}

export default function AddTodo({ addTodo }: AddTodoProps) {
  const [newTodo, setNewTodo] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = await createTodo(newTodo)
    addTodo(data)
    setNewTodo('')
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input data-testid='new-todo-input' value={newTodo} onChange={handleChange} />
      <button type='submit' data-testid='new-todo-add-button'>
        추가
      </button>
    </form>
  )
}
