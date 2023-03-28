import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/phoneBookOperations';
import { getContacts, getFilter } from 'redux/contacts/phoneBookSelectors';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase().trim()));

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={css.contactListItem} key={id}>
          <span>{name}</span>
          <span>{number}</span>
          <button
            className={css.contactListButton}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
