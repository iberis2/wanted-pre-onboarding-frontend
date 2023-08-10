type TodoItemProps = {
  todo: string
  isCompleted: boolean
}
export default function TodoItem({ todo, isCompleted }: TodoItemProps) {
  return (
    <li>
      <label>
        <input type='checkbox' defaultChecked={isCompleted} />
        <span>{todo}</span>
      </label>
    </li>
  )
}
