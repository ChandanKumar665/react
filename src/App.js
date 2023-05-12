import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Body from './components/Body'
import Header from './components/Header'
import Error from './components/Error'
import Resturant from './components/Resturant'

const AppLayout = () => (
  <div className='container'>
    <Header />
    <Outlet />
  </div>
)
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/resturant/:id',
        element: <Resturant />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />) //accepts react element
