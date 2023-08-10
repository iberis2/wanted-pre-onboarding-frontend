import { Suspense, lazy } from 'react'

const SingIn = lazy(() => import('../pages/SignIn'))
const SingUp = lazy(() => import('../pages/SignUp'))
const Todo = lazy(() => import('../pages/Todo'))

type RouterDataType = {
  id: number
  path: string
  element: React.ReactNode
  withAuth: boolean
}

export const routerData: RouterDataType[] = [
  {
    id: 0,
    path: '/',
    element: (
      <Suspense fallback={<div>loading...</div>}>
        <Todo />
      </Suspense>
    ),
    withAuth: true,
  },
  {
    id: 1,
    path: '/signin',
    element: (
      <Suspense fallback={<div>loading...</div>}>
        <SingIn />
      </Suspense>
    ),
    withAuth: false,
  },
  {
    id: 2,
    path: '/signup',
    element: (
      <Suspense fallback={<div>loading...</div>}>
        <SingUp />
      </Suspense>
    ),
    withAuth: false,
  },
  {
    id: 3,
    path: '/todo',
    element: (
      <Suspense fallback={<div>loading...</div>}>
        <Todo />
      </Suspense>
    ),
    withAuth: true,
  },
]
