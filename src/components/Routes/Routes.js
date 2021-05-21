import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Quote from '../Quote/Quote';
import CalculatorPage from '../Calculate-page/CalculatorPage';
import Navbar from '../Navbar/Navbar';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/quote" component={Quote} />
      <Route path="/calculator" component={CalculatorPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
