import { useState } from 'react'

export default function AddTodo() {
  const [newTodo, setNewTodo] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(newTodo)
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
