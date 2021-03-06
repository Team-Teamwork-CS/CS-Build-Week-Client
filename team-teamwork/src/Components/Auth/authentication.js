import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function AuthenticationRoute({ component: Component, ...rest }) {
  const key = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={props => (key ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
}
