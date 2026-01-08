import React from 'react'
import { useRoutes } from 'react-router-dom'
import { Login, Register } from './pages/auth'
import { ProductsList } from './pages/products'

export default function useRouteElements() {
  const routerElements = useRoutes([
    {
      path: '/',
      element: <ProductsList />
    },
    {
      path: 'login',
      element: <Login />
    },
    {
      path: 'register',
      element: <Register />
    }
  ])
  return routerElements
}
