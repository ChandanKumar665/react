import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BRAND_LOGO } from '../constant'
import useOnline from '../hooks/useOnline'
import UserContext from '../utils/UserContext'
import { useSelector } from 'react-redux'
import store from '../store/store'

const Navbar = () => {
  const isOnline = useOnline()
  const { user } = useContext(UserContext)
  /**
   * here we are subscriping store to read data from store
   * useSelector is a hook, accept callback func
   * callback will return state variable `items` from cart slice  i.e store.cart.items
   */
  const cartItems = useSelector(store => store.cart.items)
  return (
    <nav className='container navbar navbar-expand-sm  navbar-dark fixed-top bg-gray-500'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          <img className='logo' src={BRAND_LOGO} />
        </a>
      </div>
      <div className='d-flex'>
        <ul className='navbar-nav d-flex'>
          <li className='flex px-1'>
            <span className='nav-link'>{isOnline ? '🟢' : '🔴'}</span>
          </li>
          <li className='flex px-1'>
            <span className='nav-link'>
              <Link to={'/'} className='link link-head'>
                Home
              </Link>
            </span>
          </li>
          <li className='nav-item'>
            <span className='nav-link'>
              <Link to={'/about'} className='link link-head'>
                About
              </Link>
            </span>
          </li>
          <li className='nav-item'>
            <span className='nav-link'>
              <Link to={'/contact'} className='link link-head'>
                Contact
              </Link>
            </span>
          </li>
          <li className='nav-item'>
            <span className='nav-link'>
              <Link to={'/instamart'} className='link link-head'>
                Instamart
              </Link>
            </span>
          </li>
          <li className='nav-item'>
            <span className='nav-link'>
              <Link to={'/cart'} className='link link-head'>
                Cart&nbsp;{cartItems && `(${cartItems.length})`}
              </Link>
            </span>
          </li>
          {/* <li className='nav-item'>
            <span className='nav-link'>{user.name}</span>
          </li> */}
        </ul>
      </div>
    </nav>
  )
}

const Header = () => <Navbar />
export default Header
