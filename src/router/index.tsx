import { createBrowserRouter } from 'react-router-dom'
import { routerData } from './routerData'
import GeneralLayout from '../layout/GeneralLayout'

const router = createBrowserRouter(
  routerData.map(routerElement => ({
    path: routerElement.path,
    element: (
      <GeneralLayout withAuth={routerElement.withAuth}>{routerElement.element}</GeneralLayout>
    ),
  }))
)

export default router
