import React from 'react'
import Contacts from '../contacts/Contact'
import ContactForm from '../contacts/ContactForm'
import ContactFilter from '../contacts/ContactFilter'

const Home = () => {
  return (
    <div className='container'>
      <div className='card'>
        <ContactForm />
      </div>
      <div>
        <ContactFilter className='card' />
        <Contacts />
      </div>
    </div>
  )
}

export default Home
