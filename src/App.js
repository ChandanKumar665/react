import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Error from './components/Error'
import Header from './components/Header'
import config from './config'

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
    children: config.map(({ path, element }) => ({ path, element }))
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />) //accepts react element
