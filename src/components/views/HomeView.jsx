import React from 'react';

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
  <div style={styles.container}>
    <h2 style={styles.title}>
      сторінка сервіса{' '}
      <span role="img" aria-label="іконка вітання">
        💁‍♀️
      </span>
    </h2>
      <img src="image/zebra-7757193_960_720.jpg" alt="" />
  </div>
);

export default HomeView;
