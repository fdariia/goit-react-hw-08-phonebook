import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div>
      <h1 className={css.homePageTitle}>Welcome to your PhoneBook!</h1>
      <p className={css.homePageDescription}>Storage for your phone contacts.</p>
    </div>
  );
};

export default HomePage;