import React, { useState } from 'react';
import css from './FriendForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContactOperation } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
export function FriendForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = { name, number };
    const isExist = contacts.some(item => {
      return item.name === name && item.number === number;
    });
    if (isExist) {
      alert(`${name} is already in contacts!`);
      return;
    }
    dispatch(addContactOperation(newContact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.formCnt}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.addBtn}>
        Add contact
      </button>
    </form>
  );
}
