import React, { Component } from 'react'
import RegisterForm from './RegisterForm';
import './Register.css'

class Register extends Component {
    state = {  } 
    render() { 
        return (
            <div className="register-wrapper">
                <div className="register">
                    <RegisterForm/>
                </div>
            </div>
        );
    }
}
 
export default Register;