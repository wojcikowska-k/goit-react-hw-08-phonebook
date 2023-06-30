import './ContactList.css';
import PropTypes from 'prop-types';

export const ContactList = ({ deleteContact, filteredContacts }) => {
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
  filteredContacts: PropTypes.array,

  deleteContact: PropTypes.func,
};
