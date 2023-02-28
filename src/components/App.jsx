import { FriendForm } from './FriendForm/FriendForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export function App() {

  return (
    <>
      <h1>Phonebook</h1>
      <FriendForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </>
  );
}
