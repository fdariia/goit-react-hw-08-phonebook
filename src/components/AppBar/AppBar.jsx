import { useSelector } from 'react-redux';
import Navigation from 'components/Navigation';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import css from './AppBar.module.css';
import { getIsLoggedIn } from 'redux/auth/authSelectors';


const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  
  return (
    <header className={css.header}>
      <Navigation/>
      {isLoggedIn ? <UserMenu/> : <AuthNav/>}     
    </header>
  );
};

export default AppBar;