import React from 'react'
import { FaBars } from 'react-icons/fa'
// import logo from '../layouts/images/logo.svg'
import PropTypes from 'prop-types'
import { useGlobalContext } from '../../context/context'
import { Link } from 'react-router-dom'

const Navbar = ({ title, icon }) => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()

  const displaySubmenu = (e) => {
    const page = e.target.textContext
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom - 3
    openSubmenu(page, { center, bottom })
  }

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu()
    }
  }
  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          {/* <img src={logo} className='nav-logo' alt='Doleman' /> */}
          <button className='btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
          <h3>
            <i className={icon} />
            {title}
          </h3>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              <Link to='/contacts' style={{ color: 'white' }}>
                contacts
              </Link>
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              <Link to='/about' style={{ color: 'white' }}>
                about us
              </Link>
            </button>
          </li>
        </ul>
        <button className='btn signin-btn' onMouseOver={displaySubmenu}>
          Sign In
        </button>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
}

Navbar.defaultProps = {
  title: ' Doleman Contact Manager',
  icon: 'fas fa-id-card-alt',
}

export default Navbar
