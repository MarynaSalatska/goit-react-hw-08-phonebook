import { createSlice } from '@reduxjs/toolkit';
// import { fetchContacts } from 'services/api';
import {
  addContactOperation,
  deleteContactOperation,
  getContactsOperation,
} from './operations';
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder

      .addCase(getContactsOperation.pending, pendingHandler)
      .addCase(getContactsOperation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(getContactsOperation.rejected, rejectHandler)

      .addCase(addContactOperation.pending, pendingHandler)
      .addCase(addContactOperation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = [...state.items, action.payload];
      })
      .addCase(addContactOperation.rejected, rejectHandler)

      .addCase(deleteContactOperation.pending, pendingHandler)
      .addCase(deleteContactOperation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(item => item.id !== action.payload.id);
        console.log(action.payload);
      })
      .addCase(deleteContactOperation.rejected, rejectHandler);
  },
});

export function pendingHandler(state) {
  state.isLoading = true;
  state.error = null;
}
export function rejectHandler(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

// export const { deleteAction, addContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// deleteAction(state, action) {
//   state.items = state.items.filter(
//     contact => contact.id !== action.payload
//   );
// },
// addContact: {
//   reducer(state, action) {
//     state.items.push(action.payload);
//   },
//   prepare(contact) {
//     return {
//       payload: {
//         id: nanoid(),
//         ...contact,
//       },
//     };
//   },
// },
