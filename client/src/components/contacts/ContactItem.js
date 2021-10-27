import React, { useContext } from 'react'
import { FaRegAddressCard, FaPhone } from 'react-icons/fa'
import PropTypes from 'prop-types'
import ContactContext from '../../context/contact/contactContext'

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext)
  const { deleteContact, setCurrent, clearCurrent } = contactContext

  const { id, name, email, phone, type } = contact

  const onDelete = () => {
    deleteContact(id)
    clearCurrent()
  }

  return (
    <div className='card'>
      <h3>
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (type === 'professional' ? 'badge-success' : 'badge-primary')
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul>
        {email && (
          <li>
            <FaRegAddressCard /> {email}
          </li>
        )}
        {phone && (
          <li>
            <FaPhone /> {phone}
          </li>
        )}
      </ul>
      <p>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button className='btn btn-dark btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  )
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
}

export default ContactItem
