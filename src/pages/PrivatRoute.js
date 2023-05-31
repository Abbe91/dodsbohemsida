import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const PrivatRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuth0();
  if (
    (isAuthenticated && user?.email === "louiestokk@gmail.com") ||
    user?.email === "backstromentreprenad@hotmail.se"
  ) {
    return children;
  }
  return <Navigate to="/" />;
};

export default PrivatRoute;
