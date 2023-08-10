import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { emailPasswordValidation } from '../lib/validation'
import { signUp } from '../apis/auth'

type SignFormType = {
  type: '로그인' | '회원가입'
}

export default function SignForm({ type = '회원가입' }: SignFormType) {
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
    const { status }: { status: number } = response!
    if (status === 201) {
      navigate('/signin')
    } else if (status === 200) {
      navigate('/todo')
    } else {
      alert(`${type}을 실패했습니다. 잠시 후 다시 시도해주세요`)
    }
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
        {type}
      </button>
    </form>
  )
}
