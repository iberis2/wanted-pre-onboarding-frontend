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
    return response.status
  } catch (error: unknown) {
    const axiosError = error as AxiosError
    if (axiosError.response?.status === 400) {
      const { message } = axiosError.response.data as { message: string }
      alert(message)
    } else {
      alert('회원가입에 실패했습니다. 잠시 후 다시 시도해주세요')
    }
  }
}

export const signIn = async ({ email, password }: SignParamsType) => {
  try {
    const response = await axiosInstance.post('/auth/signin', {
      email,
      password,
    })
    saveTokenToLocalStorage(`Bearer ${response.data.access_token}`)
    return response.status
  } catch {
    alert('로그인에 실패했습니다. 잠시 후 다시 시도해주세요')
  }
}
