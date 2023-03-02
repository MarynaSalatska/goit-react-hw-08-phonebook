import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { logOutRequest } from 'redux/auth/authOperations';
import { selectToken } from 'redux/selectors';
import css from './Layout.module.css';

export default function Layout() {
  const isLoggedIn = useSelector(selectToken);
  // const userData = useSelector(selectUserData);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOutRequest());
  };
  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : css.NavLink)}
            to="/"
          >
            Home
          </NavLink>
          {isLoggedIn ? (
            <>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.active : css.NavLink
                }
                to="/contacts"
              >
                Contacts
              </NavLink>
              {/* <p>{userData.name}</p> */}
              <button
                className={({ isActive }) =>
                  isActive ? css.active : css.NavLink
                }
                onClick={handleLogOut}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.active : css.NavLink
                }
                to="/login "
              >
                Login
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.active : css.NavLink
                }
                to="/register"
              >
                Register
              </NavLink>
            </>
          )}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
