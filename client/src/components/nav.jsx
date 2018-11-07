import React from 'react';
import styles from './styles/nav.css';

const Nav = () => {
  const icon = {
    soundcloud: <i
      className="fab fa-soundcloud"
      style={{
        fontSize: '47px',
        color: 'white',
        background: '#f50',
      }}
    />,
    search: <i
      className="fas fa-search"
      style={{
        fontSize: '31px',
        margin: '2px',
        border: '1px',
        borderRadius: '20%',
        color: 'black',
        background: '#e5e5e5',
        padding: '7px',
        position: 'relative',
      }}
    />,
    user: <i
      className="fas fa-user-circle"
      style={{
        fontSize: '31px',
        margin: '2px',
        border: '1px',
        borderRadius: '20%',
        color: 'black',
        background: '#e5e5e5',
        padding: '7px',
        position: 'relative',
      }}
    />,
  };
  return (
    <header className={styles.header}>
      <div className={styles.navAll}>
        <div className={styles.left}>
          {icon.soundcloud}
          <a className={`${styles.left}, ${styles.bl}`}> Home </a>
          <a className={`${styles.left}, ${styles.bl}`}> Collection </a>
        </div>
          <div className={styles.center}>
            <form className={styles.center}>
              <input className={styles.search} placeholder="Search" type="text" />
              {icon.search}
            </form>
          </div>
        <div className={styles.right}>
          <a className={styles.right, styles.bl}> Try Pro </a>
          <a className={styles.right, styles.bl}> Upload </a>
          {icon.user}
        </div>
      </div>
    </header>
  );
};

export default Nav;
