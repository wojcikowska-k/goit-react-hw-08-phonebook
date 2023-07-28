import './ContactList.css';

import { useSelector, useDispatch } from 'react-redux';

import { selectVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectVisibleContacts);

  const delContact = id => dispatch(deleteContact(id));

  return (
    <ol>
      {filteredContacts.map(n => (
        <li className="item" key={n.id}>
          {n.name}: {n.number}
          <button
            className="deleteBtn"
            type="submit"
            onClick={() => delContact(n.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ol>
  );
};
