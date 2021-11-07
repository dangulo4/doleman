import React, { useState, useContext, useEffect } from 'react'
import AlertContext from '../../context/alert/alertContext'
import AuthContext from '../../context/auth/authContext'

const Login = (props) => {
  const alertContext = useContext(AlertContext)
  const authContext = useContext(AuthContext)

  const { setAlert } = alertContext
  const { login, error, clearErrors, isAuthenticated } = authContext

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/contacts')
    }
    if (error === 'Email does not exist') {
      setAlert(error, 'danger')
      clearErrors()
    }
    if (error === 'Invalid Password') {
      setAlert(error, 'danger')
      clearErrors()
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history])

  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const { email, password } = user

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    if (email === '') {
      setAlert('Please enter a valid email', 'danger')
    } else if (password === '') {
      setAlert('Please enter a valid password', 'danger')
    } else {
      login({ email, password })
    }
  }

  return (
    <section className='form-group'>
      <div className='form-container'>
        <h1 style={{ fontFamily: 'Roboto', fontSize: '2.5rem' }}>
          Account <span className='text primary'>Login</span>
        </h1>
        <form onSubmit={onSubmit} className='setup-form'>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              value={email}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              value={password}
              onChange={onChange}
            />
          </div>
          <input
            type='submit'
            value='Login'
            className='btn btn-primary btn-block'
          />
        </form>
      </div>
    </section>
  )
}

export default Login
