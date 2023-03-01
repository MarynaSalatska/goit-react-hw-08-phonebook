import React from 'react'
import { Filter } from 'components/Filter/Filter';
import { FriendForm } from 'components/FriendForm/FriendForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Outlet } from 'react-router-dom';


export default function ContactsView() {
  return (
    <div>
      <h1>Phonebook</h1>
      <FriendForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
      <Outlet />
    </div>
  );
}
      
      
     