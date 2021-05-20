import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Quote from '../Quote/Quote';
import CalculatorPage from '../Calculate-page/CalculatorPage';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/quote" component={Quote} />
      <Route path="/calculator" component={CalculatorPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
