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
            <Link to={'/'}>Home</Link>
          </span>
        </li>
        <li className='nav-item'>
          <span className='nav-link'>
            <Link to={'/about'}>About</Link>
          </span>
        </li>
        <li className='nav-item'>
          <span className='nav-link'>
            <Link to={'/contact'}>Contact</Link>
          </span>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            Cart
          </a>
        </li>
      </ul>
    </div>
  </nav>
)

const Header = () => <Navbar />
export default Header
