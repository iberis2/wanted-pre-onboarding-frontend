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
