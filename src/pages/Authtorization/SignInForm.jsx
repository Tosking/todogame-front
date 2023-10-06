import React,{useState} from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";

const SignInForm  = (props)=> {
  const [password,setPassword] = useState('');
  const [login,setLogin] = useState('');


    return (
      <form className="form form__login">
      <div className="authtorization-form container">
        <Input className="authtorization-form__login authtorization-form__input" setProperty = {setLogin} placeholder="Login"/>
        <Input className="authtorization-form__password authtorization-form__input" setProperty = {setPassword}  placeholder="Password"/>
				<div className="login-form__forget">
					<a href="#">Forget Password?</a>
				</div>
        <Button className="authtorization-form__button">Sign In</Button>
        <div className="route">
          <span className="route__member">Not a member? <Link to="/register" className="route__ref">Register now</Link></span>
        </div>
      </div>
      </form>
    );
  }
export default SignInForm;
