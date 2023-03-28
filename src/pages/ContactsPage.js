import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

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
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      {isLoadingContacts && !errorContacts && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
