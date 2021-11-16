import React, { Fragment, useContext } from 'react'
import { FaBars } from 'react-icons/fa'
// import logo from '../layouts/images/logo.svg'
import PropTypes from 'prop-types'
import { useGlobalContext } from '../../context/context'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'
import ContactContext from '../../context/contact/contactContext'

const Navbar = ({ title, icon }) => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()
  const authContext = useContext(AuthContext)
  const contactContext = useContext(ContactContext)

  const { isAuthenticated, logout, user } = authContext
  const { clearContacts } = contactContext

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu()
    }
  }

  const displaySubmenu = (e) => {
    const page = e.target.textContext
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom - 3
    openSubmenu(page, { center, bottom })
  }

  const onLogout = () => {
    logout()
    clearContacts()
  }

  const authLinks = (
    <Fragment>
      <nav className='nav' onMouseOver={handleSubmenu}>
        <div className='nav-center'>
          <div className='nav-header'>
            <button className='btn toggle-btn' onClick={openSidebar}>
              <FaBars />
            </button>
          </div>

          <ul className='nav-links'>
            <button className='link-btn' style={{ color: 'white' }}>
              <h4>Hello {user && user.name}</h4>
            </button>
            <li>
              <button className='btn btn-primary btn-block' onClick={onLogout}>
                <Link to='#!' style={{ color: 'white' }}>
                  Logout
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  )

  const guestLinks = (
    <Fragment>
      <nav className='nav' onMouseOver={handleSubmenu}>
        <div className='nav-center'>
          <div className='nav-header'>
            <button className='btn toggle-btn' onClick={openSidebar}>
              <FaBars />
            </button>
            <h3>
              <Link to='/' style={{ color: '#102A42' }}>
                {' '}
                <i className={icon} />
                {title}
              </Link>
            </h3>
          </div>
          <ul className='nav-links'>
            <li>
              <button className='link-btn' onMouseOver={displaySubmenu}>
                <Link to='/about' style={{ color: 'white' }}>
                  about us
                </Link>
              </button>
            </li>
            <li>
              <button className='link-btn' onMouseOver={displaySubmenu}>
                <Link to='/register' style={{ color: 'white' }}>
                  register
                </Link>
              </button>
            </li>
          </ul>
          <button className='btn signin-btn' onMouseOver={displaySubmenu}>
            <Link to='/Login' style={{ color: 'white' }}>
              {' '}
              Sign In
            </Link>
          </button>
        </div>
      </nav>
    </Fragment>
  )

  return <Fragment> {isAuthenticated ? authLinks : guestLinks}</Fragment>
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
}

Navbar.defaultProps = {
  title: ' Doleman',
  icon: 'fas fa-id-card-alt',
}

export default Navbar
