import React, { useState }  from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link } from "react-router-dom";


const RegisterForm = (props)=> {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [login,setLogin] = useState('');
  const [repeatPass,setRepeatPass] = useState('');

  return (
    <form className="form form__register" >

      <div className="authtorization-form container">
        <Input className="authtorization-form-signup__login authtorization-form__input"  setProperty ={setLogin} placeholder="Login"/>
        <Input className="authtorization-form-signup__email authtorization-form__input"  setProperty = {setEmail} placeholder="Email" />
        <Input className="authtorization-form-signup__password authtorization-form__input" setProperty ={setPassword} placeholder="Create a Password"/>
        <Input className="authtorization-form-signup__repeat-password authtorization-form__input" setProperty = {setRepeatPass} placeholder="Repeat the Password"/>
        <Button className="authtorization-form__button">Create an account</Button>
        <div className="route">
          <span className="route__member">Are you a member? <Link to ="/login" className="route__ref">Sign in now</Link></span>
        </div>
      </div>

    </form>
  );
}
export default RegisterForm;