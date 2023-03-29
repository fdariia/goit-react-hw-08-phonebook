import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import css from './ContactsPage.module.css';

import { fetchContacts } from 'redux/contacts/phoneBookOperations';
import { getError, getIsLoading } from 'redux/contacts/phoneBookSelectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(getIsLoading);
  const errorContacts = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.section}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />

      <h2 className={css.subtitle}>Contacts</h2>
      <Filter />
      {isLoadingContacts && !errorContacts && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
