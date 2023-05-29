import { lazy, Suspense } from 'react'
import About from '../components/About'
import Body from '../components/Body'
import Contact from '../components/Contact'
import Resturant from '../components/Restaurant'
import Shimmer from '../components/Shimmer'

/* *
 * Dynamic import
 * Lazy load
 * Dynamic bundling
 * chunking
 * code spliting
 * on demand loading
 *
 * */
const Instamart = lazy(() => import('../components/Instamart'))

const config = [
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
  },
  {
    path: '/instamart',
    element: (
      <Suspense fallback={<Shimmer />}>
        <Instamart />
      </Suspense>
    )
  }
]
export default config
