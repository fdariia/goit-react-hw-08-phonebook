import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authOperations';
import css from './UserMenu.module.css'



const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);

  return (
    <div className={css.container}>
      <span className={css.name}>Welcome, {name}</span>
      <button className={css.button} type="button" onClick={()=>dispatch(logOut())}>
        Log Out
      </button>
    </div>
  );
}

export default UserMenu;