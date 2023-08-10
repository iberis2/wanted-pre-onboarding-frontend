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
    const response = await createTodo(newTodo)
    const { status, data }: { status: number; data: TodoItemType } = response!
    if (status === 201) {
      addTodo(data)
      setNewTodo('')
    } else {
      alert('할 일을 추가하는데 실패했습니다. 잠시 후 다시 시도해주세요')
    }
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
