import { BRAND_LOGO } from '../constant'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <nav className='container navbar navbar-expand-sm bg-dark navbar-dark fixed-top'>
    <div className='container-fluid'>
      <a className='navbar-brand' href='#'>
        <img className='logo' src={BRAND_LOGO} />
      </a>
    </div>
    <div className='d-flex'>
      <ul className='navbar-nav d-flex'>
        <li className='nav-item'>
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
            <Link to={'/contact'} className='link link-head'>
              Cart
            </Link>
          </span>
        </li>
      </ul>
    </div>
  </nav>
)

const Header = () => <Navbar />
export default Header
