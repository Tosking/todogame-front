import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "utils/hook";

const PrivateRoute = ()=>{
  const auth  = useAuth();
  return (
    auth ? <Outlet></Outlet>:<Navigate to={"/auth/signin"}/>
  )
}
export default PrivateRoute;