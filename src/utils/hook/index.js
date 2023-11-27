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

  return { user, token };
};
