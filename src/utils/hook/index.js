import React, { useState, useLayoutEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  useRefreshMutation,
  useLoginMutation,
} from "store/slice/auth/authSlice";

import {
  selectCurrentToken,
  selectCurrentUser,
  setCredentials,
} from "store/slice/auth";

export const useAuth = () => {
  const token = useSelector(selectCurrentToken);
  const user = useSelector(selectCurrentUser);
  const [refreshToken] = useRefreshMutation();
  const dispatch = useDispatch();

  // useLayoutEffect(() => {
  //   const loadUser = async () => {
  //     try {
  //       const userToken = await refreshToken().unwrap();
  //       dispatch(setCredentials({ ...userToken }));
  //       console.log("PrvivateRoute data: ", userToken);
  //     } catch (error) {
  //       console.log("In useAuth: ", error);
  //     }
  //   };
  //   if (!token && user) loadUser();
  // }, []);

  return { user, token };
};
