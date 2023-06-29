import './ContactForm.css';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const value = e.target.value;
    setName(value);
  };

  const handleInputChangeNumber = e => {
    const value = e.target.value;
    setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(name, number);

    setName('');
    setNumber('');
  };

  return (
    <div>
      <form className="inputContainer " onSubmit={handleSubmit}>
        <span>Name</span>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <span>Number</span>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChangeNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button>Add contact</button>
      </form>
    </div>
  );
};
ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  filter: PropTypes.string,
};
