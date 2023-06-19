import React from 'react';

export const ContactList = ({ contacts, filter }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul>
      {filteredContacts.map(n => (
        <li className="item" key={n.id}>
          {n.name}: {n.number}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
