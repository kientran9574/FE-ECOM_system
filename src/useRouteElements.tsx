import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import { Login, Register } from './pages/auth'
import { ProductsList } from './pages/products'
import AuthLayout from './layouts/auth/AuthLayout'
import MainLayout from './layouts/main/MainLayout'
import Profile from './pages/profile'
import { useAuthStore } from './stores/auth.store'

function ProtectedRoute() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  console.log(isAuthenticated)
  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} replace />
}

function RejectedRoute() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  return !isAuthenticated ? <Outlet /> : <Navigate to={'/'} replace />
}

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
      element: <ProtectedRoute />,
      children: [
        {
          path: 'profile',
          element: (
            <MainLayout>
              <Profile />
            </MainLayout>
          )
        }
      ]
    },
    {
      element: <RejectedRoute />,
      children: [
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
      ]
    }
  ])
  return routerElements
}
