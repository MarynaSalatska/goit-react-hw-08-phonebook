import React from 'react';
import { Filter } from 'components/Filter/Filter';
import { FriendForm } from 'components/FriendForm/FriendForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Outlet } from 'react-router-dom';
import css from '../Layout/Layout.module.css';

export default function ContactsView() {
  return (
    <div>
      <h1 className={css.titleContact}>Phonebook</h1>
      <FriendForm />
      <h2 className={css.titleContact}>Contacts</h2>
      <Filter />
      <ContactsList />
      <Outlet />
    </div>
  );
}
