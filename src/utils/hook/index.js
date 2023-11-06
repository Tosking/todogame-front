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

  return !!token;
};
