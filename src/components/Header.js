const Navbar = () => (
  <nav className='container navbar navbar-expand-sm bg-dark navbar-dark fixed-top'>
    <div className='container-fluid'>
      <a className='navbar-brand' href='#'>
        <img
          className='logo'
          src='https://pixabay.com/get/ga55e20fda80afa3a7c5ca77d863b4a3296f71a5f8e6d7a40d6b263836626d717a1f47ae23b7f946631b2a9624ff2ded6fc7d8903a34195fdc815ab1a7cbcd44943284d5fb5bb2a9d333fa781884df44c_1280.png'
        />
      </a>
    </div>
    <div className='d-flex'>
      <ul className='navbar-nav d-flex'>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            Home
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            About
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            Contact
          </a>
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
