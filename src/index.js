import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Header, Page } from './components';

import styles from './index.scss';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Header />
        <Page />
      </div>
    </BrowserRouter>
  );
}

render(<App />, document.querySelector('#root'));
