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
    <header className={styles.navHeader}>
      <div className={styles.navAll}>
        <div className={styles.navLeft}>
          {icon.soundcloud}
          <a className={styles.navBlock}> Home </a>
          <a className={styles.navBlock}> Collection </a>
        </div>
        <div className={styles.navCenter}>
          <form className={styles.navCenter}>
            <input className={styles.navSearch} placeholder="Search" type="text" />
            {icon.search}
          </form>
        </div>
        <div className={styles.navRight}>
          <a className={styles.navBlock}> Try Pro </a>
          <a className={styles.navBlock}> Upload </a>
          {icon.user}
        </div>
      </div>
    </header>
  );
};

export default Nav;
