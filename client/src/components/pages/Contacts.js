import React, { useContext, useEffect } from 'react'
import Contact from '../contacts/Contact'
import ContactForm from '../contacts/ContactForm'
import ContactFilter from '../contacts/ContactFilter'
import AuthContext from '../../context/auth/authContext'

const Contacts = () => {
  const authContext = useContext(AuthContext)

  useEffect(() => {
    authContext.loadUser()
    // eslint-disable-next-line
  }, [])

  return (
    <div className='container'>
      <div className='card'>
        <ContactForm />
      </div>
      <div>
        <ContactFilter className='card' />
        <Contact />
      </div>
    </div>
  )
}

export default Contacts
