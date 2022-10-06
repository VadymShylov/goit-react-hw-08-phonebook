import { lazy } from 'react';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLoggedIn } from 'redux/auth/authSelectors';
import { getCurrentUserThunk } from 'redux/auth/authOperations';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import UserMenu from './UserMenu/UserMenu';
import s from './App.module.css';

const HomePage = lazy(() => import('../views/HomePage'));
const RegisterPage = lazy(() => import('../views/RegisterPage'));
const LogInPage = lazy(() => import('../views/LogInPage'));
const ContactsPage = lazy(() => import('../views/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getLoggedIn);

  useEffect(() => {
    dispatch(getCurrentUserThunk());
  }, [dispatch]);

  return (
    <div className={s.container}>
      {isLoggedIn && <UserMenu />}
      <h1 className={s.PhonebookTitle}>Phonebook</h1>
      <Routes>
        <Route
          path="/"
          element={<PublicRoute component={HomePage} restricted />}
        />
        <Route
          path="/register"
          element={<PublicRoute component={RegisterPage} restricted />}
        />
        <Route
          path="/login"
          element={<PublicRoute component={LogInPage} restricted />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute component={ContactsPage} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
