import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, addContact, deleteContact } from './operations';

// const INITIAL_STATE = JSON.parse(localStorage.getItem('Contacts')) || [];

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  // initialState: INITIAL_STATE,
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.contacts.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
  // reducers: {
  //   addContact: {
  //     reducer(state, action) {
  //       state.push(action.payload);
  //       // localStorage.setItem('Contacts', JSON.stringify(state));
  //     },
  //     prepare(name, number) {
  //       return {
  //         payload: {
  //           name,
  //           number,
  //           id: nanoid(),
  //         },
  //       };
  //     },
  //   },
  //   deleteContact(state, action) {
  //     const index = state.findIndex(contact => contact.id === action.payload);
  //     state.splice(index, 1);
  //     // localStorage.setItem('Contacts', JSON.stringify(state));
  //   },
  // },
});

// export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
