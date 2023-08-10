import { AxiosResponse } from 'axios'

type TodoItemProps = {
  todo: string
  isCompleted: boolean
  handleUpdate: (task: string, isCompleted: boolean) => Promise<AxiosResponse<any, any> | undefined>
}
export default function TodoItem({ todo, isCompleted, handleUpdate }: TodoItemProps) {
  const handleIsChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleUpdate(todo, event.target.checked)
  }

  return (
    <li>
      <label>
        <input type='checkbox' defaultChecked={isCompleted} onChange={handleIsChecked} />
        <span>{todo}</span>
      </label>
      <button type='button' data-testid='modify-button'>
        수정
      </button>
      <button type='button' data-testid='delete-button'>
        삭제
      </button>
    </li>
  )
}
