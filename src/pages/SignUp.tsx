import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { emailPasswordValidation } from '../lib/validation'

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    navigate('/signin')
    console.log('IV', inputValue)
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
