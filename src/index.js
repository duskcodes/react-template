import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/header';
import { CONFIG } from './config';

import './styles/index.scss';

function App() {
  return (
    <>
      <Header>{CONFIG.HEADER_TEXT}</Header>
    </>
  );
}

render(<App />, document.querySelector('#root'));
