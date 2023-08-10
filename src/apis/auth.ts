import { AxiosError } from 'axios'
import { axiosInstance } from './instance'

type SignUpParamsType = {
  email: string
  password: string
}

export const signUp = async ({ email, password }: SignUpParamsType) => {
  try {
    const response = await axiosInstance.post('/auth/signup', {
      email,
      password,
    })
    return response
  } catch (error: unknown) {
    const axiosError = error as AxiosError
    return axiosError.response
  }
}
