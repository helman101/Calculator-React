import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Calculator from '../calculator/Calculator';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/calculator'component={Calculator}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;