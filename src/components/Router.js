import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home/Home';
import Today from '../pages/today/Today';

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/today" component={Today} />
  </Switch>
);

export default Router;