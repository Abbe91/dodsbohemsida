import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children, isLoggedIn }) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
