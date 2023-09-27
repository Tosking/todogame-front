import React, { Component } from "react";
import RegisterForm from "./RegisterForm";
import "./Register.css";
import "../main/Authorization.css";
import Header from "../header/Header";

class Register extends Component {
  state = {};
  render() {
    return (
      <div className="register">
        <div className="authorization__inner container">
          <Header />
          <RegisterForm />
        </div>
      </div>
    );
  }
}

export default Register;
