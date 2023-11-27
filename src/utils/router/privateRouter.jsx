import Loader from "components/loader/Loader";
import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { setCredentials } from "store/slice/auth";
import { useRefreshMutation } from "store/slice/auth/authSlice";
import { useAuth } from "utils/hook";

const PrivateRoute = () => {
  const { token, user } = useAuth();
  const [refresh, { isLoading: isLoadingRef }] = useRefreshMutation();
  const location = useLocation();
  // useEffect(() => {
  //   (async () => {
  //     if (user && !token) {
  //       const accessToken = await refresh().unwrap();
  //       setCredentials({ ...accessToken });
  //     }
  //   })();
  // }, [token]);
  return token ? (
    <Outlet />
  ) : (
    <Navigate to={"/auth/signin"} state={{ from: location.pathname }} replace />
  );
};
export default PrivateRoute;
