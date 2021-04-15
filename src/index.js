import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { Header, Main } from './components';
import { About, Home } from './pages';

import styles from './index.scss';

function renderSwitch() {
  return (
    <Switch>
      <Route path='/' exact strict sensitive>
        <Home />
      </Route>

      <Route path='/about' component={About} exact strict sensitive />
      <Redirect from='*' to='/' />
    </Switch>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Header />
        <Main>{renderSwitch()}</Main>
      </div>
    </BrowserRouter>
  );
}

render(<App />, document.querySelector('#root'));
