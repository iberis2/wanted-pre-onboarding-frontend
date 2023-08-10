import { useState } from 'react'

type TodoItemProps = {
  initialTodo: string
  initialCompleted: boolean
  handleUpdate: (task: string, isCompleted: boolean) => Promise<number | undefined>
}
export default function TodoItem({ initialTodo, initialCompleted, handleUpdate }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [task, setTask] = useState(initialTodo)
  const [isCompleted, setIsCompleted] = useState(initialCompleted)

  const handleIsChecked = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const status = await handleUpdate(task, event.target.checked)
    if (status === 200) {
      setIsCompleted(event.target.checked)
    }
  }

  const handleTodoInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value)
  }

  const EditTodo = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const status = await handleUpdate(task, isCompleted)
    if (status === 200) {
      setIsEditing(false)
    }
  }

  return (
    <li>
      {isEditing ? (
        <form onSubmit={EditTodo}>
          <label>
            <input
              name='checkbox'
              type='checkbox'
              defaultChecked={isCompleted}
              onChange={handleIsChecked}
            />
            <input
              name='todo'
              value={task}
              onChange={handleTodoInputChange}
              data-testid='modify-input'
            />
          </label>
          <button type='submit' data-testid='submit-button'>
            제출
          </button>
          <button type='button' data-testid='cancel-button' onClick={() => setIsEditing(false)}>
            취소
          </button>
        </form>
      ) : (
        <>
          <label>
            <input type='checkbox' defaultChecked={isCompleted} onChange={handleIsChecked} />
            <span>{task}</span>
          </label>
          <button type='button' data-testid='modify-button' onClick={() => setIsEditing(true)}>
            수정
          </button>
          <button type='button' data-testid='delete-button'>
            삭제
          </button>
        </>
      )}
    </li>
  )
}
