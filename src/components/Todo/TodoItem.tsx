import { useState } from 'react'
import EditTodoItem from './EditTodoItem'

type TodoItemProps = {
  initialTodo: string
  initialCompleted: boolean
  handleUpdate: (task: string, isCompleted: boolean) => Promise<number | undefined>
  handleDelete: () => void
}
export default function TodoItem({
  initialTodo,
  initialCompleted,
  handleUpdate,
  handleDelete,
}: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [task, setTask] = useState(initialTodo)
  const [isCompleted, setIsCompleted] = useState(initialCompleted)

  const handleIsChecked = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const status = await handleUpdate(task, event.target.checked)
    if (status === 200) {
      setIsCompleted(event.target.checked)
    }
  }

  return (
    <li>
      {isEditing ? (
        <EditTodoItem
          handleUpdate={handleUpdate}
          task={task}
          setTask={setTask}
          isCompleted={isCompleted}
          handleIsChecked={handleIsChecked}
          cancelEdit={() => setIsEditing(false)}
        />
      ) : (
        <>
          <label>
            <input type='checkbox' defaultChecked={isCompleted} onChange={handleIsChecked} />
            <span>{task}</span>
          </label>
          <button type='button' data-testid='modify-button' onClick={() => setIsEditing(true)}>
            수정
          </button>
          <button type='button' data-testid='delete-button' onClick={handleDelete}>
            삭제
          </button>
        </>
      )}
    </li>
  )
}
