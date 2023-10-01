import React, { Component } from "react";
import RegisterForm from "./RegisterForm";
import "./Register.css";
import "../main/Authorization.css";
import Header from "../header/Header";
import MainContent from "../maincontent/Maincontent";
const Register = ()=> {
    return (
      <div className="register">
        <div className="authorization__inner container">
          <Header />
          <MainContent/>
          <RegisterForm />
        </div>
      </div>
    );
  }


export default Register;
