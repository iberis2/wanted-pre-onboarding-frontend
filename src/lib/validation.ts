const emailRegex = /@/
const passwordRegex = /^.{8,}$/

export const emailPasswordValidation = (email: string, password: string) => {
  return emailRegex.test(email) && passwordRegex.test(password)
}
