import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const data = useSelector((state) => state.persist);
  const isAuthenticated = data?.isAuthenticated;
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
