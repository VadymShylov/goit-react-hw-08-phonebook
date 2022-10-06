import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactApi,
  getContactsApi,
  removeContactApi,
} from 'services/dbApi';

export const getALLContacts = createAsyncThunk(
  'getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await getContactsApi();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const newContact = await addContactApi(contact);
      return newContact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await removeContactApi(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
