import React  from "react";

import "../../styleComponents/Authtorization.css";
import Header from "../../components/Header";
import MainContent from "../../components/Maincontent";
import SignInForm from "./SignInForm";
import RegisterForm from "./RegisterForm";


const Authorization = (props)=> {

    return (
      <div className="App">
      <div className={"authorization " + props.auth}>
        <div className="authorization__inner container">
          <Header />
          <MainContent type_auth= {props.auth==="register" ?"Register":"Sign In"} />
          {props.auth ==="register"?  <RegisterForm/>:<SignInForm route = {props.route} />}

        </div>
      </div>
       </div>
    );
  }


export default Authorization;
