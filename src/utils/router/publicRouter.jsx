import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "utils/hook";

import { useSelector, useDispatch } from "react-redux";
import { useRefreshMutation } from "store/slice/auth/authSlice";

import {
  selectCurrentToken,
  selectCurrentUser,
  setCredentials,
} from "store/slice/auth";

const PublicRoute = () => {
  const auth = useAuth();
  const location = useLocation();
  const token = useSelector(selectCurrentToken);
  const user = useSelector(selectCurrentUser);
  const [refreshToken] = useRefreshMutation();
  const dispatch = useDispatch();
  const from = location?.state?.from || "/";

  useEffect(() => {
    const loadUser = async () => {
      try {
        const userToken = await refreshToken().unwrap();
        dispatch(setCredentials({ ...userToken }));
        console.log("PublicRouter data: ", userToken);
      } catch (error) {
        console.log("In useAuth: ", error);
      }
    };
    if (!token && user) loadUser();
  }, [auth]);

  return !auth ? <Outlet /> : <Navigate to={from} state={location.pathname} />;
};
export default PublicRoute;
