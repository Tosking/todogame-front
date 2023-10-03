import React from "react";
import RegisterForm from "./SignInForm";
import "../../../styleComponents/SignIn.css";
import "../../../styleComponents/Authorization.css";
import Header from "../../header/Header";
import MainContent from "../../maincontent/Maincontent";
const Register = ()=> {
    return (
      <div className="login">
        <div className="authorization__inner container">
					<Header />
					<MainContent type_auth="Sign In"/>
					<RegisterForm />
        </div>
      </div>
    );
  }


export default Register;
