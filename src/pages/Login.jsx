import React from 'react'
import Header from 'components/Header';
import Form from 'components/Form';
import Input from 'components/Input';
import Button from 'components/Button';
import MainContent from 'components/Maincontent';
import { Link } from 'react-router-dom';
import "styleComponents/Authtorization.css";
import google from "images/google.svg"

const Login = ({login,sendData,errors}) => {
  console.log(errors);
  return (
    
    <div className="App">

    <div className="authorization signin" >
      <div className="authorization__inner container">
        
        <Header />
        <MainContent>
          <h1 className="content-header">{"Sign In"}</h1>
        </MainContent>

        <Form className="form form__login" onSubmit={sendData}>
            <div className="authtorization-form container">
              <Button buttonClassName="authtorization-form__button button-google">
                <img src={google} alt="#" />
                <span>Continue with Google</span>
              </Button>

              <Input  typeInput = "text" rootClassName = "form-group" 
              inputClassName="authtorization-form__login authtorization-form__input" 
              validation={{...login('login',{
                required:true
              })}} placeholder="Login"/>
              
              <Input showHidden ={true} typeInput = "password" rootClassName = "form-group" 
              inputClassName="authtorization-form__password authtorization-form__input" 
               placeholder="Password"
               validation={{...login('password',{
                required:true
              })}}
               />
              
              <div className="login-form__forget">
                <a href="#">Forget Password?</a>
              </div>
              <Button typeBtn={"submit"} buttonClassName="authtorization-form__button"  >Sign In</Button>
              <div className="route">
                <span className="route__member">Not a member? <Link to="/auth/signup" className="route__ref">Register now</Link></span>
              </div>
            </div>
      </Form>

      </div>
    </div>
     </div>
   
  );
}
export default Login;