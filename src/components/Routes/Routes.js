import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Calculator from '../calculator/Calculator';
import Home from '../Home/Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/calculator" component={Calculator} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
