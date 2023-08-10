import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { emailPasswordValidation } from '../lib/validation'
import { signUp } from '../apis/auth'

export default function SignUp() {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  })
  const [btnDisabled, setBtnDisabled] = useState(true)

  const handleChange = (type: 'email' | 'password', event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(prev => ({ ...prev, [type]: event.target.value }))
  }

  const handleKeyUp = () => {
    if (emailPasswordValidation(inputValue.email, inputValue.password)) {
      setBtnDisabled(false)
    } else {
      setBtnDisabled(true)
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const response = await signUp(inputValue)
    if (response?.status !== 201) {
      alert('회원가입에 실패했습니다. 잠시 후 다시 시도해주세요')
    }
    navigate('/signin')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='email'
        value={inputValue.email}
        onChange={event => handleChange('email', event)}
        onKeyUp={handleKeyUp}
        data-testid='email-input'
        required
      />
      <input
        type='password'
        minLength={8}
        value={inputValue.password}
        onChange={event => handleChange('password', event)}
        onKeyUp={handleKeyUp}
        data-testid='password-input'
        required
      />
      <button type='submit' data-testid='signup-button' disabled={btnDisabled}>
        회원가입
      </button>
    </form>
  )
}
