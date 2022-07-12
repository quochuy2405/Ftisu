import { Admin, Register, Page404, Test, Home, Team } from '@/page'
import { Navigate } from 'react-router-dom'
import { RouteItem } from '@/components/Interface/app'

export const routers: Array<RouteItem> = [
  {
    path: '/',
    header: true,
    main: <Home></Home>
  },
  {
    path: '/register',
    header: false,
    main: <Register></Register>
  },
  {
    path: '/team',
    header: true,
    main: <Team></Team>
  },
  {
    path: '/admin/:slug',
    header: false,
    main: <Admin></Admin>
  },
  {
    path: '/admin/:slug/:opt',
    header: false,
    main: <Admin></Admin>
  },
  {
    path: '/test',
    header: true,
    main: <Navigate to="/admin/dashboard" replace />
  },
  {
    path: '/*',
    header: false,
    main: <Page404></Page404>
  }
]
