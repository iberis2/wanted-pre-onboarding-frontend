import { useEffect, useState } from 'react'
import TodoItem from '../components/Todo/TodoItem'
import AddTodo, { TodoItemType } from '../components/Todo/AddTodo'
import { getTodos, updateTodo } from '../apis/todo'
import { TodoType } from '../components/Todo/AddTodo'

export default function Todo() {
  const [todos, setTodos] = useState<TodoType>([])

  const getTodoList = async () => {
    const data = await getTodos()
    setTodos(data)
  }

  const addTodo = (newTodo: TodoItemType) => {
    setTodos(pre => [...pre, newTodo])
  }

  useEffect(() => {
    getTodoList()
  }, [])

  return (
    <div>
      <AddTodo addTodo={addTodo} />
      <ul>
        {todos?.length ? (
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              initialTodo={todo.todo}
              initialCompleted={todo.isCompleted}
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
