import React from 'react'
import { FaUserPlus, FaBriefcase } from 'react-icons/fa'

const sublinks = [
  {
    page: 'contacts',
    links: [{ label: 'contacts', icon: <FaUserPlus />, url: '/contacts' }],
  },
  {
    page: 'about us',
    links: [{ label: 'about us', icon: <FaBriefcase />, url: '/contacts' }],
  },
]

export default sublinks
