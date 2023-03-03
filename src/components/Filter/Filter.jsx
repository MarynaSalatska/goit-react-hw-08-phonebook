import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'redux/filterSlice';
import css from '../ContactListItem/ContactListItem.module.css';

export function Filter() {
  const value = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();
  //////////////////////filter
  const handleFilterChange = e => {
    // const { value } = e.target;
    // setFilter(value);
    dispatch(addFilter(e.target.value));
  };

  return (
    <div>
      <div className={css.listUl}>
        <p >Find contacts by name</p>
        <input
          type="text"
          name="filter"
          value={value}
          onChange={handleFilterChange}
        />
      </div>
    </div>
  );
}
