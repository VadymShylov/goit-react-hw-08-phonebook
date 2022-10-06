import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getALLContacts } from 'redux/contacts/operations/contactsOperations';
import { getMustContats } from '../redux/auth/authSelectors';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMustContats && dispatch(getALLContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <Filter />
      <ContactsList />
    </>
  );
};

export default ContactsPage;
