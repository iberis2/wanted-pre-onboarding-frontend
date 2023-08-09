// import SignIn from './SignIn'
import Todo from './Todo'

export default function Home() {
  // 로그인 안되어 있으면 로그인 페이지 보여주기
  // if(!로그인) return <SignIn />

  return (
    <div>
      <Todo />
    </div>
  )
}
