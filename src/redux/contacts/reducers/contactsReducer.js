import { addFilter } from '../actions/contactsActions';
import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  getALLContacts,
} from '../operations/contactsOperations';

const isLoadingReducer = createReducer(false, {
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,

  [getALLContacts.pending]: () => true,
  [getALLContacts.fulfilled]: () => false,
  [getALLContacts.rejected]: () => false,

  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const itemsReducer = createReducer([], {
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [getALLContacts.fulfilled]: (_, { payload }) => payload,
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(el => el.id !== payload),
});

const setError = (_, { payload }) => payload;

const errorReducer = createReducer(null, {
  [addContact.rejected]: setError,
  [addContact.pending]: () => null,

  [getALLContacts.rejected]: setError,
  [getALLContacts.pending]: () => null,

  [deleteContact.rejected]: setError,
  [deleteContact.pending]: () => null,
});

const filter = createReducer('', {
  [addFilter]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
  filter,
});

export default contactsReducer;
