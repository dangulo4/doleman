import React from 'react'
import { useGlobalContext } from '../../context/context'
import phoneImg from './images/phone.svg'
import { Link } from 'react-router-dom'
import Login from '../auth/Login'

const Hero = (props) => {
  const { closeSubmenu } = useGlobalContext()

  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Contact Manager infrastructure for your business</h1>
          <p>
            Companies of all sizes-from startups to Fortune 500 use Doleman's
            software and APIs to manage their business online contacts. Register
            now by cliking below...
          </p>
          <button className='btn'>
            <Link to='/register' style={{ color: 'white' }}>
              Start now
            </Link>
          </button>
        </article>
        <article className='hero-images'>
          {/* <img src={phoneImg} className='phone-img' alt='phone' /> */}
          <Login {...props} />
        </article>
      </div>
    </section>
  )
}

export default Hero
