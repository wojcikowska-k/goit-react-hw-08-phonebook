import React from 'react';
import './ContactList.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, filter, deleteContact }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(n => (
        <li className="item" key={n.id}>
          {n.name}: {n.number}
          <button
            className="deleteBtn"
            type="button"
            onClick={() => deleteContact(n.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  deleteContact: PropTypes.func,
};

export default ContactList;
