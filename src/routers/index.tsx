import { Admin, Register, Page404, Test, Home, Team } from '@/page'
import { Navigate } from 'react-router-dom'
import { RouteItem } from '@/components/Interface/app'

export const routers: Array<RouteItem> = [
  {
    path: '/',
    header: true,
    element: <Home></Home>
  },
  {
    path: '/register',
    header: false,
    element: <Register></Register>
  },
  {
    path: '/team',
    header: true,
    element: <Team></Team>
  },
  {
    path: '/admin/:slug',
    header: false,
    element: <Admin></Admin>
  },
  {
    path: '/admin/:slug/:opt',
    header: false,
    element: <Admin></Admin>
  },
  {
    path: '/test',
    header: true,
    element: <Navigate to="/admin/dashboard" replace />
  },
  {
    path: '/*',
    header: false,
    element: <Page404></Page404>
  }
]
