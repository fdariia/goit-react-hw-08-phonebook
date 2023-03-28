import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './phoneBookOperations';
import { logOut } from 'redux/auth/authOperations';

const INITIAL_PHONEBOOK_STATE = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const phoneBookSlice = createSlice({
  name: 'phonebook',
  initialState: INITIAL_PHONEBOOK_STATE,

  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },

  extraReducers: {
    [fetchContacts.pending](state) {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },

    [addContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },

    [deleteContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      // const index = state.contacts.items.findIndex(
      //   contact => contact.id === action.payload.id);
      // state.contacts.items.splice(index, 1);
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload.id
      );
    },
    [deleteContact.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    [logOut.fulfilled](state){
      state.contacts.items = [];
      state.contacts.isLoading = false;
      state.contacts.error = null;
    }
  },
});

export const { filterContacts } = phoneBookSlice.actions;
export const phoneBookReducer = phoneBookSlice.reducer;
