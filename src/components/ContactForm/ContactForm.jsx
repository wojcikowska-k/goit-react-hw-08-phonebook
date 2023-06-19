import { Component } from 'react';
import './ContactForm.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    filter: '',
  };

  handleInputChange = e => {
    const value = e.target.value;
    this.setState({ name: value });
  };

  handleInputChangeNumber = e => {
    const value = e.target.value;
    this.setState({ number: value });
  };

  handleInputChangeFilter = e => {
    const value = e.target.value;
    this.setState({ filter: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;

    this.props.onSubmit(name, number);

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div>
        <form className="inputContainer " onSubmit={this.handleSubmit}>
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <span>Number</span>
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleInputChangeNumber}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button>Add contact</button>
        </form>
      </div>
    );
  }
}
