import React from "react";
import Login from "pages/Login";
import Register from "pages/Register";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import {
  useLoginMutation,
  useRegisterMutation,
  useRefreshMutation,
} from "store/slice/auth/authSlice";
import { selectCurrentUser, setCredentials } from "store/slice/auth";
import { useAuth } from "utils/hook";

const AuthRootComponent = () => {
  const [login, { isLoadingLogin }] = useLoginMutation();
  const [registerUser, { isLoadingRegister }] = useRegisterMutation();
  const location = useLocation();
  const isAuth = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSubmitForm = async (data) => {
    if (location.pathname === "/auth/signin") {
      try {
        const userData = await login(data).unwrap();
        dispatch(setCredentials({ ...data, userData }));
        navigate("/");
      } catch (error) {
        if (!error?.originalStatus) {
          // isLoading: true until timeout occurs
          console.log("No Server Response");
        } else if (error.originalStatus === 400) {
          console.log("Missing Username or Password");
        } else if (error.originalStatus === 401) {
          console.log("Unauthorized");
        } else {
          console.log("Login Failed");
        }
      }
    } else {
      if (data.password === data.repeatPassword) {
        const userData = {
          login: data.login,
          email: data.email,
          password: data.password,
        };
        try {
          const userToken = await registerUser(userData).unwrap();
          dispatch(setCredentials({ ...userToken }));
          navigate("/main");
        } catch (error) {
          return error;
        }
      } else {
        return new Error("Error repeat password does not match the password");
      }
    }
  };
  return location.pathname === "/auth/signin" ? (
    <Login
      login={register}
      errors={errors}
      sendData={handleSubmit(handleSubmitForm)}
      loading={isLoadingLogin}
    />
  ) : location.pathname === "/auth/signup" ? (
    <Register
      errors={errors}
      register={register}
      sendData={handleSubmit(handleSubmitForm)}
      loading={isLoadingRegister}
    />
  ) : null;
};

export default AuthRootComponent;
