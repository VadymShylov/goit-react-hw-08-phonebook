import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFilter } from '../../redux/contacts/actions/contactsActions';
import { getFilter } from '../../redux/contacts/selectors/contactsSelectors';
import s from './Filter.module.css';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = e => {
    const { value } = e.target;
    dispatch(addFilter(value));
  };

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search"
      />
    </label>
  );
}
