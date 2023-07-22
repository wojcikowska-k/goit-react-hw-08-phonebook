import './ContactList.css';

import { useSelector, useDispatch } from 'react-redux';

// import { getFilter, getContacts } from '../../redux/selectors';
import { selectVisibleContacts } from 'redux/selectors';
// import { deleteContact } from '../../redux/contactsSlice';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectVisibleContacts);

  const delContact = id => dispatch(deleteContact(id));

  return (
    <ul>
      {filteredContacts.map(n => (
        <li className="item" key={n.id}>
          {n.name}: {n.phone}
          <button
            className="deleteBtn"
            type="submit"
            onClick={() => delContact(n.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
