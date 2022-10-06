import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations/contactsOperations';
import {
  getContacts,
  getFilter,
  getIsLoadingContacts,
} from 'redux/contacts/selectors/contactsSelectors';
import Loader from 'components/Loader/Loader';
import s from './ContactsList.module.css';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoadingContacts);

  const onDeleteContact = id => dispatch(deleteContact(id));

  const getFilterSearchContact = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filterSearchContact = getFilterSearchContact();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={s.list}>
          {filterSearchContact.map(contact => (
            <li className={s.item} key={contact.id}>
              <span className={s.name}>{contact.name}:</span>
              <span className={s.number}>
                <a href={'tel:number'}>{contact.number}</a>
              </span>
              <button
                className={s.btn}
                type="button"
                onClick={() => onDeleteContact(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
