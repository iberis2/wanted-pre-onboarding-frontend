import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { emailPasswordValidation } from '../lib/validation'
import { signIn, signUp } from '../apis/auth'
import styles from './SignForm.module.css'

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

    if (type === '회원가입') {
      const status = await signUp(inputValue)
      if (status === 201) {
        navigate('/signin')
      }
    } else if (type === '로그인') {
      const status = await signIn(inputValue)
      if (status === 200) {
        navigate('/todo')
      }
    }
  }

  const moveToOtherPage = () => {
    if (type === '회원가입') {
      navigate('/signin')
    } else if (type === '로그인') {
      navigate('/signup')
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type='email'
        value={inputValue.email}
        onChange={event => handleChange('email', event)}
        onKeyUp={handleKeyUp}
        data-testid='email-input'
        placeholder='이메일을 입력해주세요'
        required
        className={styles.input}
      />
      <input
        type='password'
        minLength={8}
        value={inputValue.password}
        onChange={event => handleChange('password', event)}
        onKeyUp={handleKeyUp}
        data-testid='password-input'
        placeholder='비밀번호를 입력해주세요'
        required
        className={styles.input}
      />
      <button
        type='submit'
        data-testid={type === '회원가입' ? 'signup-button' : 'signin-button'}
        disabled={btnDisabled}
        className={btnDisabled ? styles.disabledBtn : styles.button}
      >
        {type}
      </button>
      <button type='button' onClick={moveToOtherPage} className={styles.routToBtn}>
        {type === '회원가입' ? '로그인 하러 가기' : '회원가입 하러 가기'}
      </button>
    </form>
  )
}
