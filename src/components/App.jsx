import React from 'react';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const LazyLayout = lazy(() => import('../components/Layout/Layout'));
const LazyHomeView = lazy(() => import('../components/views/HomeView'));
const LazyLoginView = lazy(() => import('../components/views/LoginView'));
const LazyRegisterView = lazy(() => import('../components/views/RegisterView'));
const LazyContactsView = lazy(() => import('../components/views/ContactsView'));
function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<LazyLayout />}>
          <Route index element={<LazyHomeView />} />
          <Route path="/login" element={<LazyLoginView />} />
          <Route path="/register" element={<LazyRegisterView />} />
          <Route path="/contacts" element={<LazyContactsView />} />
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
