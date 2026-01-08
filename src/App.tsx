import React from 'react'
import useRouteElements from './useRouteElements'

const App = () => {
  const routeElements = useRouteElements()
  return <div>{routeElements}</div>
}

export default App
