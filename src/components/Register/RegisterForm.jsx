import React  from "react";
import Input from "../input/Input";
import Button from "../button/Button";


const RegisterForm = (props)=> {

  return (
    <form className="form form__register" >

      <div className="authtorization-form container">
        <Input className="authtorization-form-signup__login authtorization-form__input" placeholder="Login"/>
        <Input className="authtorization-form-signup__email authtorization-form__input" placeholder="Email"/>
        <Input className="authtorization-form-signup__password authtorization-form__input" placeholder="Create a Password"/>
        <Input className="authtorization-form-signup__repeat-password authtorization-form__input" placeholder="Repeat the Password"/>
        <Button className="authtorization-form__button">Create an account</Button>
        <div className="route">
          <span className="route__member">Are you a member? <a href="#" className="route__ref">Sign in now</a></span>
        </div>
      </div>

    </form>
  );
}
export default RegisterForm;