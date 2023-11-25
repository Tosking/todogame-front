import Loader from "components/loader/Loader";
import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "utils/hook";

const PrivateRoute = () => {
  const { token, user } = useAuth();
  const location = useLocation();
  if (user && !token) {
    return <Loader />;
  }
  return token ? (
    <Outlet />
  ) : (
    <Navigate to={"/auth/signin"} state={{ from: location.pathname }} replace />
  );
};
export default PrivateRoute;
