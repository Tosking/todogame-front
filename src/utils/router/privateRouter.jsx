import React from "react";

import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useAuth } from "utils/hook";

const PrivateRoute = () => {
  const auth = useAuth();
  const location = useLocation();

  return auth ? (
    <Outlet />
  ) : (
    <Navigate to={"/auth/signin"} state={{ from: location.pathname }} replace />
  );
};
export default PrivateRoute;
