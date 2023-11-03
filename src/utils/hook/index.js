import React from "react";
import { selectCurrentToken } from "store/slice/auth";

import { useSelector } from "react-redux";

export const useAuth = () => {
  const token = useSelector(selectCurrentToken);

  return !!token;
};
