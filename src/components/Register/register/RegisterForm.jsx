import React, { Component } from "react";
import Input from "../input/Input";
import Button from "../input/Button";

class RegisterForm extends Component {
  state = {};
  render() {
    return (
      <div className="register__form">
        <Input className="register-form__email register-form__input" placeholder="Email"/>
        <Input className="register-form__password register-form__input" placeholder="Create a Password"/>
        <Input className="register-form__repeat-password register-form__input" placeholder="Repeat the Password"/>
        <Button className="register-form__button">Create an account</Button>
      </div>
    );
  }
}

export default RegisterForm;
