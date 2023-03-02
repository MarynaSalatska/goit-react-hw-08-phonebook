import { combineReducers } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import { authReducer } from './auth/authSlice';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'token',
  storage,
  blacklist: ['filter'],
};
const persistedReducer = persistReducer(persistConfig, authReducer);

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: persistedReducer,
});
