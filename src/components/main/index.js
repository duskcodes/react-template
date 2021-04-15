import PropTypes from 'prop-types';
import React from 'react';

import { useScrollTop } from '../../hooks';

import styles from './index.scss';

function Main({ children }) {
  useScrollTop();

  return <main className={styles.container}>{children}</main>;
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Main };
