import React, { Component } from "react";
import RegisterForm from "./RegisterForm";
import "../../../styleComponents/SignIn.css";
import "../../../styleComponents/Authorization.css";
import Header from "../../header/Header";
import MainContent from "../../maincontent/Maincontent";
const Register = ()=> {
    return (
      <div className="login">
        <div className="authorization__inner container">
          <Header />
          <MainContent/>
          <RegisterForm />
        </div>
      </div>
    );
  }


export default Register;
