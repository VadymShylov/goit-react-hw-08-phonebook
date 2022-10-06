import s from './ContactForm.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations/contactsOperations';
import { getContacts } from 'redux/contacts/selectors/contactsSelectors';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const handleAddContact = e => {
    e.preventDefault();

    const data = { name: name, number: number };

    if (checkTwinName(data)) {
      return toast.error(`Name: ${data.name} is already in contacts.`);
    }

    if (checkTwinNumber(data)) {
      return toast.error(`Number: ${number} is already in contacts.`);
    }

    dispatch(addContact(data));

    resetState();
  };

  const resetState = () => {
    setName('');
    setNumber('');
  };

  const checkTwinName = data => {
    return contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
  };

  const checkTwinNumber = data => {
    return contacts.find(contact => contact.number === data.number);
  };

  return (
    <>
      <form className={s.form} onSubmit={handleAddContact}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </label>
        <label className={s.label}>
          Number
          <input
            className={s.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
            placeholder="Enter phone number"
          />
        </label>
        <button className={s.btn} type="submit">
          <span className={s.iconPlus}></span>
          <p className={s.discription}>Add contact</p>
        </button>
      </form>
      <h2 className={s.contactsListTitle}>Contacts</h2>
      <ToastContainer position="top-right" autoClose={5000}></ToastContainer>
    </>
  );
}
