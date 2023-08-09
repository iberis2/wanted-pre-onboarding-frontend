import { createBrowserRouter } from 'react-router-dom'
import { routerData } from './routerData'

const router = createBrowserRouter(
  routerData.map(routerElement => ({
    path: routerElement.path,
    element: routerElement.element,
  }))
)

export default router
