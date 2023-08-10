const isBrowser = () => typeof window !== 'undefined'

export const saveTokenToLocalStorage = (token: string) => {
  if (isBrowser()) {
    try {
      localStorage.setItem('token', token)
    } catch (error) {
      console.error('Error saving accessToken to local storage:', error)
    }
  }
}

export const getTokenFromLocalStorage = () => {
  if (isBrowser()) {
    try {
      return localStorage.getItem('token')
    } catch (error) {
      return console.error('Error getting accessToken to local storage:', error)
    }
  }
  return console.error(`it dose not have a browser storage`)
}

export const removeTokenFromLocalStorage = () => {
  if (isBrowser()) {
    try {
      localStorage.removeItem('token')
    } catch (error) {
      console.error('Error removing accessToken from local storage:', error)
    }
  }
}
