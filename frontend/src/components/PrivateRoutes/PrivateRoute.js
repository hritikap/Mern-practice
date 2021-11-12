import React from 'react';
import { Redirect, Route } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userInfo = useSelector((state) => state.userData.userInfo);

  return (
    <Route
      {...rest}
      component={(props) => {
        return userInfo ? (
          <div>
            <Sidebar />
            <Component {...props} />
          </div>
        ) : (
          <Redirect to='/' />
        );
      }}
    />
  );
};
export default PrivateRoute;
