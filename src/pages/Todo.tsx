import { useEffect, useState } from 'react'
import TodoItem from '../components/Todo/TodoItem'
import AddTodo, { TodoItemType } from '../components/Todo/AddTodo'
import { deleteTodo, getTodos, updateTodo } from '../apis/todo'
import { TodoType } from '../components/Todo/AddTodo'
import styles from './Todo.module.css'

export default function Todo() {
  const [todos, setTodos] = useState<TodoType>([])

  const getTodoList = async () => {
    const data = await getTodos()
    setTodos(data)
  }

  const addTodo = (newTodo: TodoItemType) => {
    setTodos(pre => [...pre, newTodo])
  }

  const handleDelete = async (id: number) => {
    const status = await deleteTodo(id)
    if (status === 204) {
      setTodos(pre => pre.filter(todo => todo.id !== id))
    }
  }

  useEffect(() => {
    getTodoList()
  }, [])

  return (
    <div className={styles.todo}>
      <AddTodo addTodo={addTodo} />
      <ul className={styles.ul}>
        {todos?.length ? (
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              initialTodo={todo.todo}
              initialCompleted={todo.isCompleted}
              handleUpdate={(task, isCompleted) => updateTodo(todo.id, task, isCompleted)}
              handleDelete={() => handleDelete(todo.id)}
            />
          ))
        ) : (
          <div className={styles.noList}>
            등록된 할 일이 없습니다. <br /> 새로운 할 일을 추가해 보세요!
          </div>
        )}
      </ul>
    </div>
  )
}
