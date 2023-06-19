import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import Filter from './Filter/Filter';
import './App.css';

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

  render() {
    const { contacts, filter } = this.state;

    return (
      <>
        <Form onSubmit={this.addNewName} />

        <Filter contacts={contacts} filter={filter} />
        <ul>
          {contacts.map(n => (
            <li className="item" key={n.id}>
              {n.name}: {n.number}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
