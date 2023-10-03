import React  from "react";

import "../../styleComponents/Authtorization.css";
import Header from "../header/Header";
import MainContent from "../maincontent/Maincontent";
import SignInForm from "../signIn/SignInForm";
import RegisterForm from "../Register/RegisterForm";


const Authorization = (props)=> {

    return (
      <div className= "App">
      <div className={"authorization " + props.auth}>
        <div className="authorization__inner container">
          <Header />
          <MainContent type_auth= {props.auth==="register" ?"Register":"Sign In"} />
          {props.auth ==="register"?  <RegisterForm/>:<SignInForm/>}
      
        </div>
      </div>
      </div>
    );
  }


export default Authorization;
