import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>About Us</h1>
          <p>This is a contact manager for keeping contacts</p>
          <button className='btn'>
            <Link to='/' style={{ color: 'white' }}>
              Home
            </Link>
          </button>
        </article>
      </div>
      <div>
        <p>
          <strong>Version: 1.0.0</strong>
        </p>
      </div>
    </section>
  )
}

export default About
