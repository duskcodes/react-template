import React from 'react';
import { Link } from 'react-router-dom';

import { CONFIG } from '../../config';

import styles from './index.scss';

function Header() {
  return (
    <header className={styles.container}>
      {CONFIG.HEADER_TEXT}

      <div className={styles.linksContainer}>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </div>
    </header>
  );
}

export { Header };
