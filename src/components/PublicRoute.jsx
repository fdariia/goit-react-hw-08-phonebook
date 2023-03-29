import React from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
    const isLoggedIn = useSelector(getIsLoggedIn);

    if (isLoggedIn) {
        return <Navigate to='/contacts' />;
    }
    return children;
};
