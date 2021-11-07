import React from 'react'
import { FaUserPlus, FaBriefcase, FaUsers, FaHouseUser } from 'react-icons/fa'

const sublinks = [
  {
    page: 'home',
    links: [{ label: 'home', icon: <FaHouseUser />, url: '/' }],
  },
  {
    page: 'contacts',
    links: [{ label: 'contacts', icon: <FaUsers />, url: '/contacts' }],
  },
  {
    page: 'about us',
    links: [{ label: 'about us', icon: <FaBriefcase />, url: '/about us' }],
  },
  {
    page: 'login',
    links: [{ label: 'login', icon: <FaBriefcase />, url: '/login' }],
  },
  {
    page: 'register',
    links: [{ label: 'register', icon: <FaUserPlus />, url: '/register' }],
  },
  {
    page: 'logout',
    links: [{ label: 'logout', icon: <FaUserPlus />, url: '/' }],
  },
]

export default sublinks
