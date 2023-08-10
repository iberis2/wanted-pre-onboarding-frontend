import { useEffect, useState } from 'react'
import TodoItem from '../components/Todo/TodoItem'
import AddTodo, { TodoItemType } from '../components/Todo/AddTodo'
import { getTodos, updateTodo } from '../apis/todo'
import { TodoType } from '../components/Todo/AddTodo'

export default function Todo() {
  const [todos, setTodos] = useState<TodoType>([])

  const getTodoList = async () => {
    const response = await getTodos()
    const { status, data }: { status: number; data: TodoType } = response!
    if (status === 200) {
      setTodos(data)
    } else {
      alert('todo list를 불러오는데 실패했습니다. 잠시 후 다시 시도해주세요')
    }
  }

  const addTodo = (newTodo: TodoItemType) => {
    setTodos(pre => [newTodo, ...pre])
  }

  useEffect(() => {
    getTodoList()
  }, [])

  return (
    <div>
      <AddTodo addTodo={addTodo} />
      <ul>
        {todos.length ? (
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo.todo}
              isCompleted={todo.isCompleted}
              handleUpdate={(task, isCompleted) => updateTodo(todo.id, task, isCompleted)}
            />
          ))
        ) : (
          <div>
            등록된 할 일이 없습니다. <br /> 새로운 할 일을 추가해 보세요!
          </div>
        )}
      </ul>
    </div>
  )
}
