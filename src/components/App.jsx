import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

export default class App extends Component {
  state = { ...INITIAL_STATE };

  filteredList = value => {
    this.setState({ filter: value });
  };

  addNewName = (name, number) => {
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: nanoid(),
          name,
          number,
        },
      ],
    }));
  };

  isNameOnList = (name, number) => {
    const { contacts } = this.state;
    const onlyNames = contacts.map(contact => contact.name);
    onlyNames.includes(name)
      ? alert(name + ' is already in contacts')
      : this.addNewName(name, number);
  };

  deleteContact = id => {
    const { contacts } = this.state;

    this.setState({
      contacts: contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
    const { contacts, filter, id } = this.state;

    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.isNameOnList} />

        <h2>Contacts</h2>
        <Filter contacts={contacts} filteredList={this.filteredList} />
        <ContactList
          contacts={contacts}
          filter={filter}
          id={id}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
