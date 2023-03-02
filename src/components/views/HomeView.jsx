import React from 'react';
import css from '../Layout/Layout.module.css';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomeView = () => (
  <div className={css.homeImg} style={styles.container}>
    <h2 className={css.titleHome}>
Your Phonebook
    </h2>
   
  </div>
);

export default HomeView;
