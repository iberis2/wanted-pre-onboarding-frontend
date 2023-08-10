import { useState } from 'react'
import styles from './EditTodoItem.module.css'

type EditTodoItemProps = {
  handleUpdate: (task: string, isCompleted: boolean) => Promise<number | undefined>
  task: string
  setTask: React.Dispatch<React.SetStateAction<string>>
  isCompleted: boolean
  handleIsChecked: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>
  closeEdit: () => void
}

export default function EditTodoItem({
  handleUpdate,
  task,
  setTask,
  isCompleted,
  handleIsChecked,
  closeEdit,
}: EditTodoItemProps) {
  const [editTask, setEditTask] = useState(task)

  const handleTodoInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditTask(event.target.value)
  }

  const EditTodo = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setTask(editTask)
    const status = await handleUpdate(editTask, isCompleted)
    if (status === 200) {
      closeEdit()
    }
  }

  return (
    <form onSubmit={EditTodo} className={styles.form}>
      <label className={styles.label}>
        <input
          name='checkbox'
          type='checkbox'
          defaultChecked={isCompleted}
          onChange={handleIsChecked}
          className={styles.checkbox}
        />
        <input
          name='todo'
          value={editTask}
          onChange={handleTodoInputChange}
          data-testid='modify-input'
          className={styles.input}
        />
      </label>
      <div className={styles.buttonBox}>
        <button type='submit' data-testid='submit-button' className={styles.submitButton}>
          제출
        </button>
        <button
          type='button'
          data-testid='cancel-button'
          onClick={closeEdit}
          className={styles.cancelButton}
        >
          취소
        </button>
      </div>
    </form>
  )
}
