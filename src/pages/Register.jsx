import React, { useState }  from "react";
import Input from "components/Input";
import Button from "components/Button";
import { Link } from "react-router-dom";
import Form from "components/Form";
import Header from "components/Header";
import MainContent from "components/Maincontent";
import "styleComponents/Authtorization.css";
import AnimatedPage from "components/Animated";


const Register = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [login,setLogin] = useState('');
  const [repeatPass,setRepeatPass] = useState('');

  return (
   
    <div className="App">
    <div className="authorization signin" >
      <div className="authorization__inner container">
        <Header/>
        <MainContent>
          <h1 className="type-auth">{"Register"}</h1>
        </MainContent>

        <Form className="form form__register">
            <div className="authtorization-form container">
            <Input  rootClassName = "form-group" inputClassName="authtorization-form-signup__login authtorization-form__input"  onChange ={setLogin} placeholder="Login"/>
            <Input  rootClassName = "form-group" inputClassName="authtorization-form-signup__email authtorization-form__input"  onChange = {setEmail} placeholder="Email" />
            <Input  rootClassName = "form-group" inputClassName="authtorization-form-signup__password authtorization-form__input" onChange ={setPassword} placeholder="Create a Password"/>
            <Input  rootClassName = "form-group" inputClassName="authtorization-form-signup__repeat-password authtorization-form__input" onChange = {setRepeatPass} placeholder="Repeat the Password"/>
            <Button className="authtorization-form__button">Create an account</Button>
            <div className="route">
                <span className="route__member">Are you a member? <Link to ="/login" className="route__ref">Sign in now</Link></span>
            </div>
            </div>
        </Form>

      </div>
    </div>
     </div>
     
  )
}
export default Register;