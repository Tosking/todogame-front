import React  from "react";
import Input from "components/Input";
import Button from "components/Button";
import { Link } from "react-router-dom";
import Form from "components/Form";
import Header from "components/Header";
import MainContent from "components/Maincontent";
import "styleComponents/Authtorization.css";



const Register = ({register,sendData,errors}) => {
  console.log(errors);
  return (
   
    <div className="App">
    <div className="authorization signin" >
      <div className="authorization__inner container">
        <Header/>
        <MainContent>
          <h1 className="content-header">{"Register"}</h1>
        </MainContent>

        <Form formClassName="form__register" onSubmit={sendData}>
            <div className="authtorization-form container">
            <Input 
            validation = {{ ...register('login',{
            required:true
            })}}
             typeInput="text" 
             rootClassName = "form-group" 
             inputClassName="authtorization-form-signup__login authtorization-form__input"  
           
             placeholder="Login"/>
              {errors.login && <h1>This field is required</h1>}
            <Input 
            validation = {{ ...register('email',{
            required:true
            })}}
            typeInput = "text" 
            rootClassName = "form-group" 
            inputClassName="authtorization-form-signup__email authtorization-form__input"  
          
            placeholder="Email" />
            {errors.email && <h1>This field is required</h1>} 
            <Input 
            validation = {{ ...register('password',{
              required:true
            })}}
            showHidden ={true} 
            typeInput = "password" 
            rootClassName = "form-group" 
            inputClassName="authtorization-form-signup__password authtorization-form__input" 
          
            placeholder="Create a Password"/>
            {errors.password && <h1>This field is required</h1>} 

            <Input 
            validation = {{ ...register('repeatPassword',{
              required:true
            })}}
            typeInput = "text" 
            rootClassName = "form-group" 
            inputClassName="authtorization-form-signup__repeat-password authtorization-form__input" 
     
            placeholder="Repeat the Password"/>
            {errors.repeatPassword && <h1>This field is required</h1>} 

            <Button typeBtn = {"submit"}  buttonClassName="authtorization-form__button">Create an account</Button>
            <div className="route">
                <span className="route__member">Are you a member? <Link to ="/auth/signin" className="route__ref">Sign in now</Link></span>
            </div>
            </div>
        </Form>

      </div>
    </div>
     </div>
     
  )
}
export default Register;