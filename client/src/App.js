import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/layouts/Navbar'
import Hero from './components/layouts/Hero'
import Sidebar from './components/layouts/Sidebar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contacts from './components/pages/Contacts'

import './App.css'

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Sidebar />
        {/* <Submenu /> */}
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Hero} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contacts' component={Contacts} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  )
}

export default App
