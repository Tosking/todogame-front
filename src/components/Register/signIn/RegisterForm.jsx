import React, { Component } from "react";
import Input from "../../input/Input";
import Button from "../../input/Button";

const  RegisterForm  = ()=> {

    return (
      <form className="form form__register">
      <div className="authtorization-form container">
        <Input className="register-form__login authtorization-form__input" placeholder="Login"/>
        <Input className="register-form__email authtorization-form__input" placeholder="Email"/>
        <Input className="register-form__password authtorization-form__input" placeholder="Create a Password"/>
        <Input className="register-form__repeat-password authtorization-form__input" placeholder="Repeat the Password"/>
        <Button className="register-form__button">Create an account</Button>
        <div className="route">
          <span className="route__member">Are you a member? <a href="#" className="route__ref">Sign in now</a></span>
        </div>
      </div>
      </form>
    );
  }
export default RegisterForm;
