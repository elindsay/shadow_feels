import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from 'pages/login';

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path='/login' component={ Login }/>
    </Switch>
  )
}

export default Routes;
