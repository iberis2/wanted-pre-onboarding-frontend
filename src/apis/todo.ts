import { AxiosError } from 'axios'
import { axiosInstance } from './instance'

export const getTodos = async () => {
  try {
    const response = await axiosInstance.get('/todos')
    return response
  } catch (error: unknown) {
    const axiosError = error as AxiosError
    return axiosError.response
  }
}

export const createTodo = async (todo: string) => {
  try {
    const response = await axiosInstance.post('/todos', { todo })
    return response
  } catch (error: unknown) {
    const axiosError = error as AxiosError
    return axiosError.response
  }
}

export const updateTodo = async (id: number, todo: string, isCompleted: boolean) => {
  try {
    const response = await axiosInstance.put(`/todos/${id}`, { todo, isCompleted })
    return response
  } catch (error: unknown) {
    const axiosError = error as AxiosError
    return axiosError.response
  }
}
