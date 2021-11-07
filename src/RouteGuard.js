import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { emailLogin } from "./userRoutes";

const RouteGuard = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  if (!token) return <Redirect to={emailLogin} />;
  return children;
};

export default RouteGuard;
