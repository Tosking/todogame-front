import React,{ useState } from "react"
import Login from "pages/Login"
import Register from "pages/Register"
import { instance } from "utils/axios"
import { useLocation,useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { login } from "store/slice/auth"


const AuthRootComponent = ()=>{

  const [userlogin,setLogin] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [repeatPass,setRepeatPass] = useState('');

  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async(e)=>{
    e.preventDefault()
    if(location.pathname ==="/login")
    {
      const userData  = {
        userlogin,
        password
      }
      console.log(userData);
      const user = await instance.post("/login",userData)
      dispatch(login(user.data))
      navigate('/main')
    }
    else {
      const userData  = {
        userlogin,
        email,
        password,
        repeatPass,
      }
      try {
        const newUser = await instance.post("/login",userData)
        dispatch(login(newUser.data))
        navigate('/main')
      } catch (error) {
          return e
      }
    }
    //TODO: Решить, будет ли токен или нет
};

  return (
      location.pathname === "/login" ? 
      <Login 
      setLogin = {setLogin} 
      setPassword = {setPassword}
      sendData = {handleSubmit}  />:
        location.pathname ==="/register"?
        <Register 
        setEmail = {setEmail} 
        setPassword = {setPassword} 
        setLogin = {setLogin} 
        setRepeatPass = {setRepeatPass}
        sendData = {handleSubmit}/>:
        null 
  )
}
export default AuthRootComponent;