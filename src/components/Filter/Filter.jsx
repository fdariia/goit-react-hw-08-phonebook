import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/phoneBookSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label className={css.filter}>
      Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        onChange={evt => dispatch(filterContacts(evt.currentTarget.value))}
      />
    </label>
  );
};

export default Filter;
