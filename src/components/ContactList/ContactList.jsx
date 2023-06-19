import React from 'react';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(n => (
        <li className="item" key={n.id}>
          {n.name}: {n.number}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
