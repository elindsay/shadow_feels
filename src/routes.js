import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Splash from 'pages/splash';
import Login from 'pages/login';

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path='/' component={ Splash }/>
      <Route exact path='/login' component={ Login }/>
    </Switch>
  )
}

export default Routes;
