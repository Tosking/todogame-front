import React, { Component } from "react";
import Input from "../input/Input";

class RegisterForm extends Component {
  state = {};
  render() {
    return (
      <div className="register__form">
        <Input />
        <Input />
        <Input />
      </div>
    );
  }
}

export default RegisterForm;
