import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsOperation } from 'redux/operations';
import {
  selectContacts,
  selectFilter,
  selectFilterContacts,
} from 'redux/selectors';
import css from '../ContactListItem/ContactListItem.module.css';

export function ContactsList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsOperation());
  }, [dispatch]);

  const filterContacts = useSelector(selectFilterContacts);

  return (
    <ul className={css.listUl}>
      {filterContacts.map(({ id, name, number }) => (
        <ContactListItem key={id} name={name} number={number} btnId={id} />
      ))}
    </ul>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
