import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Routes } from './constants';

import Home from 'modules/home';

const AppRoutes = () => {
  return (
    <Switch>
      <Route path={Routes.HOME} component={Home} />
    </Switch>
  );
};

export default AppRoutes;
