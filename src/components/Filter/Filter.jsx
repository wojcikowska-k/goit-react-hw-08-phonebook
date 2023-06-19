import React from 'react';

const Filter = ({ contacts, filter, handleInputChangeFilter }) => {
  handleInputChangeFilter();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li className="item" key={id}>
          {name}: {number}
        </li>
      ))}
    </ul>
  );
};

export default Filter;
