import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Favorites from '../components/Favorites/Favorites';
import PrivateRoute from './PrivateRoute';

const routes = (
  <div>
    <Switch>
      <PrivateRoute exact path="/" component={Home}/>
      <PrivateRoute path="/favorites" component={Favorites}/>
      <Route path="/login" component={Login}/>
    </Switch>
  </div>
);

export default routes;