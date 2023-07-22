import './ContactForm.css';
import { useDispatch } from 'react-redux';

// import { addContact } from '../../redux/contactsSlice';
import { addContact } from 'redux/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;

    //names has to be the same as defined in mockAPI
    const contact = {
      name,
      phone,
    };

    dispatch(addContact(contact));

    form.reset();
  };

  return (
    <div>
      <form className="inputContainer " onSubmit={handleSubmit}>
        <span>Name</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <span>Number</span>
        <input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button>Add contact</button>
      </form>
    </div>
  );
};
