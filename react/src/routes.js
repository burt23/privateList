import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from './index.jsx';
import Portal from './containers/Portal';

const Routes = () => (
  <Switch>
    <Route
      path="/"
      component={ Index }
    />
  </Switch>
);

// console.log('wat are you doooing?')

    // { Finally, catch all unmatched routes }
export default Routes;