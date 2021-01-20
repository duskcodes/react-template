import PropTypes from 'prop-types';
import React from 'react';

import styles from './index.scss';

function Header({ children }) {
  return <div className={styles.header}>{children}</div>;
}

Header.propTypes = {
  children: PropTypes.string.isRequired,
};

export { Header };
