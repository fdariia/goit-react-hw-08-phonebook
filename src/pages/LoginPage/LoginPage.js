import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'redux/auth/authOperations';
import css from './LoginPage.module.css'

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    navigate('/contacts');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={css.section}>
      <h1 className={css.title}>Login</h1>

      <form onSubmit={handleSubmit} className={css.form} autoComplete="off">
        <label className={css.label}>
        Email
          <input className={css.input}
            type="email"
            name="email"
            value={email}
            placeholder='Email'
            onChange={handleChange}
          />
        </label>

        <label className={css.label}>
          Password
          <input className={css.input}
            type="password"
            name="password"
            value={password}
            placeholder='Password'
            onChange={handleChange}
          />
        </label>

        <button className={css.button} type="submit">Log in</button>
      </form>
    </div>
  );
}
