import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { useScrollTop } from '../../hooks';
import { About, Home } from '../../pages';

import styles from './index.scss';

function renderRoutes(routes) {
  return routes.map((route) => {
    const Component = route[0];

    return (
      <Route key={route[1]} path={route[1]} exact strict sensitive>
        <Component {...route[2]} />
      </Route>
    );
  });
}

function Page() {
  useScrollTop();

  const routes = [
    [Home, '/'],
    [About, '/about'],
  ];

  return (
    <main className={styles.container}>
      <Switch>
        {renderRoutes(routes)}
        <Redirect from='*' to='/' />
      </Switch>
    </main>
  );
}

export { Page };
