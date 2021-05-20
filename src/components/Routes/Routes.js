import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Calculator from '../calculator/Calculator';
import Home from '../Home/Home';
import Quote from '../Quote/Quote';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/quote" component={Quote} />
      <Route path="/calculator" component={Calculator} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
