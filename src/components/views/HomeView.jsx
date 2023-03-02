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
    <h2 style={styles.title}>
Your Phonebook
    </h2>
      <img src="image/zebra-7757193_960_720.jpg" alt="" />
  </div>
);

export default HomeView;
