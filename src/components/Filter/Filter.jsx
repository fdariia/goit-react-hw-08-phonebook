import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/phoneBookSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        onChange={evt => dispatch(filterContacts(evt.currentTarget.value))}
      />
    </label>
  );
};

export default Filter;
