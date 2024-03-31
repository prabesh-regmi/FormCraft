import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import React from "react";

function Auth({ allowedRoles }) {
  const { isAuthenticated, user } = useSelector((store) => store.login);
  if (!isAuthenticated) {
    return <Navigate to="/register" />;
  }

  if (allowedRoles.includes(user?.role)) {
    return <Outlet />;
  }

  return <Navigate to="/unauthorized" />;
}
export default Auth;
