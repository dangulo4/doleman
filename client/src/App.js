import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Hero from './components/layouts/Hero'
import Sidebar from './components/layouts/Sidebar'
import Contacts from './components/pages/Contacts'
import About from './components/pages/About'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Alerts from './components/layouts/Alerts'
import PrivateRoute from './components/routing/PrivateRoute'

import ContactState from './context/contact/ContactState'
import AuthState from './context/auth/AuthState'
import AlertState from './context/alert/AlertState'
import setAuthToken from './utils/setAuthToken'
import './App.css'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <Sidebar />
              {/* <Submenu /> */}
              <div className='hero'>
                <Alerts />
                <Switch>
                  <Route exact path='/' component={Hero} />
                  <PrivateRoute exact path='/contacts' component={Contacts} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  )
}

export default App
