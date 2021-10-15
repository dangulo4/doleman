import React from 'react'
import { useGlobalContext } from '../../context/context'
import phoneImg from './images/phone.svg'

const Hero = () => {
  const { closeSubmenu } = useGlobalContext()

  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Contact Manager infrastructure for your business</h1>
          <p>
            Millons of companies of all sizes-from startups to Fortune 500-use
            Stripe's software and APIs to accept payments, send payouts, and
            manage their business online.
          </p>
          <button className='btn'>Start now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt='phone' />
        </article>
      </div>
    </section>
  )
}

export default Hero
