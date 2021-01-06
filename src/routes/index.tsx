import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Search from '../pages/Search';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Search} />
    <Route path="/search" exact component={Search} />
    <Route path="/home" exact component={Home} />
  </Switch>
);

export default Routes;
