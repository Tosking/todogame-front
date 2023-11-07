import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "utils/hook";

const PublicRoute = () => {
  const { user, token } = useAuth();
  const location = useLocation();
  const from = location?.state?.from || "/";

  if (token && user) return <Navigate to={from} state={location.pathname} />;
  return !token ? <Outlet /> : <Navigate to={from} state={location.pathname} />;
};
export default PublicRoute;
