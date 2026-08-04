import { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './components/pages/index'
import NotFound from './components/pages/notfound'

const router = [
  {
    element: <MainLayout />,
    children: [
      {
        path: '/', element: <Home />
      },
      {
        path: '*', element: <NotFound />
      }
    ]
  }
]

function App() {
  const elements = useRoutes(router);

  return (
    <>
      {elements}
      {/* <div className="ticks"></div>
      <section id="spacer"></section> */}
    </>
  )
}

export default App
