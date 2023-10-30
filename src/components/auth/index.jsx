import React,{useEffect} from "react"
import Login from "pages/Login"
import Register from "pages/Register"
import {useLocation,useNavigate } from "react-router-dom"
import { useDispatch, useSelector} from 'react-redux';
import { useForm } from "react-hook-form"

import { useLoginMutation, useRegisterMutation } from "store/slice/auth/authSlice";
import { selectCurrentUser, setCredentials } from "store/slice/auth";

const AuthRootComponent = ()=>{

  const [login, isLoading] = useLoginMutation();
  const user = useSelector(selectCurrentUser)
  console.log(user);
  const [registerUser] = useRegisterMutation();
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const {
    register,
    formState:{
      errors
    },handleSubmit
  } = useForm()

  const handleSubmitForm = async(data)=>{
    if(location.pathname ==="/auth/signin")
    {      
      const userData = await login(data).unwrap()
      dispatch(setCredentials({...data,userData}))
      navigate('/main')
    }
    else {
      if(data.password ===data.repeatPassword)
      {
      const userData  = {
        login:data.login,
        email:data.email,
        password:data.password,

      }
      try {
        const userToken = await registerUser(userData).unwrap()
        dispatch(setCredentials({...userToken}))
        navigate('/main')
      } catch (error) {
          return error
      }
    }
    else{
      return new Error("Error repeat password does not match the password")
    }
  }
    //TODO: Решить, будет ли токен или нет
};

  return (
      location.pathname === "/auth/signin" ? 
      <Login 
      login = {register}
      errors = {errors}
      sendData = {handleSubmit(handleSubmitForm)}  />:location.pathname ==="/auth/signup"?
      <Register 
      errors = {errors}
      register={register}
      sendData = {handleSubmit(handleSubmitForm)}/>:
      null
 
   )
}


export default AuthRootComponent;