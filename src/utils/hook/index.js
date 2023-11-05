import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRefreshMutation } from "store/slice/auth/authSlice";

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

  useEffect(() => {
    console.log("useEffect in PrivateRouter");
    const loadUser = async () => {
      if (!token && user) {
        try {
          const userToken = await refreshToken().unwrap();

          dispatch(setCredentials({ ...userToken }));
          return true;
        } catch (error) {
          console.log("In useAuth: ", error);
        }
      } else return false;
    };
    loadUser();
  }, [token]);
  return !!token;
};
