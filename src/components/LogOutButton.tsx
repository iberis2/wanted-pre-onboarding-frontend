import { useNavigate } from 'react-router-dom'
import { removeTokenFromLocalStorage } from '../lib/tokenHandler'
import styles from './LogOutButton.module.css'

type LogOutButtonProps = {
  children: React.ReactNode
}

export default function LogOutButton({ children }: LogOutButtonProps) {
  const navigate = useNavigate()

  const logOut = () => {
    removeTokenFromLocalStorage()
    navigate(0)
  }

  return (
    <button type='button' onClick={logOut} className={styles.logOutButton}>
      {children}
    </button>
  )
}
