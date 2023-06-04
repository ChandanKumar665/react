import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Error from './components/Error'
import Footer from './components/Footer'
import Header from './components/Header'
import config from './config'
import store from './store/store'
import UserContext from './utils/UserContext'

const AppLayout = () => {
  const [user, setUser] = useState({
    name: 'Test',
    email: 'mail@gmail.com'
  })
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user }}>
        <div className='container'>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: config.map(({ path, element }) => ({ path, element }))
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />) //accepts react element
