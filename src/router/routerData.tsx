import { Suspense, lazy } from 'react'

const Home = lazy(() => import('../pages/Home'))
const SingIn = lazy(() => import('../pages/SignIn'))
const SingUp = lazy(() => import('../pages/SignUp'))
const Todo = lazy(() => import('../pages/Todo'))

type RouterDataType = {
  id: number
  path: string
  element: React.ReactNode
}

export const routerData: RouterDataType[] = [
  {
    id: 0,
    path: '/',
    element: (
      <Suspense fallback={<div>loading...</div>}>
        <Home />
      </Suspense>
    ),
  },
  {
    id: 1,
    path: '/signin',
    element: (
      <Suspense fallback={<div>loading...</div>}>
        <SingIn />
      </Suspense>
    ),
  },
  {
    id: 2,
    path: '/signup',
    element: (
      <Suspense fallback={<div>loading...</div>}>
        <SingUp />
      </Suspense>
    ),
  },
  {
    id: 3,
    path: '/todo',
    element: (
      <Suspense fallback={<div>loading...</div>}>
        <Todo />
      </Suspense>
    ),
  },
]
