import { AxiosError } from 'axios'
import { axiosInstance } from './instance'
import { saveTokenToLocalStorage } from '../lib/tokenHandler'

type SignParamsType = {
  email: string
  password: string
}

export const signUp = async ({ email, password }: SignParamsType) => {
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

export const signIn = async ({ email, password }: SignParamsType) => {
  try {
    const response = await axiosInstance.post('/auth/signin', {
      email,
      password,
    })
    saveTokenToLocalStorage(`Bearer ${response.data.access_token}`)
    return response
  } catch (error: unknown) {
    const axiosError = error as AxiosError
    return axiosError.response
  }
}
