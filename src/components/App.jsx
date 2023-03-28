import React, { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import ContactsPage from 'pages/ContactsPage'
import AppBar from './AppBar';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/authOperations';

function App() {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(fetchCurrentUser())
  }, [dispatch]);

  return (
    <div>
      <AppBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/contacts" element={<ContactsPage/>} />
      </Routes>
    </div>
  );
}

export default App;
