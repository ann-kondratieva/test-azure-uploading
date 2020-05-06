import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Routes } from '../constants';
import { getIsAuthenticated } from 'modules/auth/selectors';

const PrivateRouteContainer = ({ allowAnonymous, component, ...props }) => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const RouteComponent = <Route {...props} component={component} />;
  return !isAuthenticated ? <Redirect to={Routes.SIGN_IN} /> : RouteComponent;
};

PrivateRouteContainer.propTypes = {
  allowAnonymous: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func, PropTypes.object]),
};

export default PrivateRouteContainer;
