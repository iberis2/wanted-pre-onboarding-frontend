import styles from './EditTodoItem.module.css'

type EditTodoItemProps = {
  handleUpdate: (task: string, isCompleted: boolean) => Promise<number | undefined>
  task: string
  setTask: React.Dispatch<React.SetStateAction<string>>
  isCompleted: boolean
  handleIsChecked: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>
  cancelEdit: () => void
}

export default function EditTodoItem({
  handleUpdate,
  task,
  setTask,
  isCompleted,
  handleIsChecked,
  cancelEdit,
}: EditTodoItemProps) {
  const handleTodoInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value)
  }

  const EditTodo = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const status = await handleUpdate(task, isCompleted)
    if (status === 200) {
      cancelEdit()
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
          value={task}
          onChange={handleTodoInputChange}
          data-testid='modify-input'
          className={styles.input}
        />
      </label>
      <div className={styles.buttonBox}>
        <button type='submit' data-testid='submit-button' className={styles.editButton}>
          제출
        </button>
        <button
          type='button'
          data-testid='cancel-button'
          onClick={cancelEdit}
          className={styles.deleteButton}
        >
          취소
        </button>
      </div>
    </form>
  )
}
