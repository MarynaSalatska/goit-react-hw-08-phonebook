import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';


export default function Layout() {
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
          <NavLink
            className={({ isActive }) => (isActive ? css.active : css.NavLink)}
            to="/login "
          >
            Login
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : css.NavLink)}
            to="/register"
          >
            Sign in
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : css.NavLink)}
            to="/contacts"
          >
            Contacts
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
