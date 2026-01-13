import { useRoutes } from 'react-router-dom'
import { Login, Register } from './pages/auth'
import { ProductsList } from './pages/products'
import AuthLayout from './layouts/auth/AuthLayout'
import MainLayout from './layouts/main/MainLayout'

export default function useRouteElements() {
  const routerElements = useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <ProductsList />
        </MainLayout>
      )
    },
    {
      path: 'login',
      element: (
        <AuthLayout>
          <Login />
        </AuthLayout>
      )
    },
    {
      path: 'register',
      element: (
        <AuthLayout>
          <Register />
        </AuthLayout>
      )
    }
  ])
  return routerElements
}
