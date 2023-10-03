import React, { Component } from "react";
import Input from "../../input/Input";
import Button from "../../input/Button";

const  RegisterForm  = ()=> {

    return (
      <form className="form form__register">
      <div className="authtorization-form container">
        <Input className="register-form__login authtorization-form__input" placeholder="Login"/>
        <Input className="register-form__password authtorization-form__input" placeholder="Password"/>
				<div className="login-form__forget">
					<a href="#">Forget Password?</a>
				</div>
        <Button className="register-form__button">Sign In</Button>
        <div className="route">
          <span className="route__member">Not a member? <a href="#" className="route__ref">Register now</a></span>
        </div>
      </div>
      </form>
    );
  }
export default RegisterForm;
