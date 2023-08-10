import { axiosInstance } from './instance'

export const getTodos = async () => {
  try {
    const response = await axiosInstance.get('/todos')
    return response.data
  } catch {
    alert('todo list를 불러오는데 실패했습니다. 잠시 후 다시 시도해주세요')
  }
}

export const createTodo = async (todo: string) => {
  try {
    const response = await axiosInstance.post('/todos', { todo })
    return response.data
  } catch {
    alert('할 일을 추가하는데 실패했습니다. 잠시 후 다시 시도해주세요')
  }
}

export const updateTodo = async (id: number, todo: string, isCompleted: boolean) => {
  try {
    const response = await axiosInstance.put(`/todos/${id}`, { todo, isCompleted })
    return response.status
  } catch {
    alert('수정에 실패했습니다. 잠시후 다시 시도해주세요')
  }
}

export const deleteTodo = async (id: number) => {
  try {
    const response = await axiosInstance.delete(`/todos/${id}`)
    return response.status
  } catch {
    alert('삭제에 실패했습니다. 잠시후 다시 시도해주세요')
  }
}
