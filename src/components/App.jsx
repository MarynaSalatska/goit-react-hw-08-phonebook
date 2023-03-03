import React, { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/authOperations';

import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';

const LazyLayout = lazy(() => import('../components/Layout/Layout'));
const LazyHomeView = lazy(() => import('../components/views/HomeView'));
const LazyLoginView = lazy(() => import('../components/views/LoginView'));
const LazyRegisterView = lazy(() => import('../components/views/RegisterView'));
const LazyContactsView = lazy(() => import('../components/views/ContactsView'));
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<LazyLayout />}>
          <Route index element={<LazyHomeView />} />
          <Route path="/" element={<PublicRoute />}>
            <Route path="/login" element={<LazyLoginView />} />
            <Route path="/register" element={<LazyRegisterView />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/contacts" element={<LazyContactsView />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

// {/* <h1>Phonebook</h1>
// <FriendForm />
// <h2>Contacts</h2>
// <Filter />
// <ContactsList /> */}
