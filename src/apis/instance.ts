import axios, { InternalAxiosRequestConfig } from 'axios'

type Options = {
  baseURL: string
  timeout: number
  headers: { 'Content-Type': string }
  withCredentials: boolean
}

function createAxiosInstance() {
  const instanceOptions: Options = {
    baseURL: 'https://www.pre-onboarding-selection-task.shop',
    timeout: 3000,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  }

  const instance = axios.create(instanceOptions)
  return instance
}

export const axiosInstance = createAxiosInstance()
