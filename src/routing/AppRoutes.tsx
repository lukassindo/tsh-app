import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import  LogIn  from 'app/login/LogIn';
import  MainPage  from 'app/products/MainPage';

import { AppRoute } from './AppRoute.enum';

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path={AppRoute.home} exact component={MainPage} />
      <Route path={AppRoute.login} component={LogIn} />

      <Redirect to={AppRoute.home} />
    </Switch>
  );
};
