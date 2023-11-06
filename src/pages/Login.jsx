import React from "react";
import Header from "components/Header";
import Form from "components/Form";
import Input from "components/Input";
import Button from "components/Button";
import MainContent from "components/Maincontent";
import { Link } from "react-router-dom";
import "styleComponents/Authtorization.css";
import google from "images/google.svg";
import MoonLoader from "react-spinners/MoonLoader";

import { LoginPattern } from "utils/validationPatterns";
const Login = ({ login, sendData, errors, loading, isValid, watch }) => {
  const { minLength } = LoginPattern.password;
  const { required } = LoginPattern;
  return (
    <div className="authorization signin">
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

            <Input
              typeInput="text"
              rootClassName="form-group"
              inputClassName="authtorization-form__login authtorization-form__input"
              validation={{
                ...login("login", {
                  required,
                }),
              }}
              placeholder="Login"
            />
            {errors.login && <h1 className="error">{errors.login.message}</h1>}
            <Input
              showHidden={true}
              typeInput="password"
              rootClassName="form-group"
              inputClassName="authtorization-form__password authtorization-form__input"
              placeholder="Password"
              validation={{
                ...login("password", {
                  required,
                  minLength,
                }),
              }}
            />
            {errors.password && (
              <h1 className="error">{errors.password.message}</h1>
            )}

            <div className="login-form__forget">
              <Link>Forget Password?</Link>
            </div>
            <Button
              isValid={isValid}
              typeBtn={"submit"}
              buttonClassName="authtorization-form__button"
            >
              {loading ? <MoonLoader size={20} /> : "Sign In"}
            </Button>
            <div className="route">
              <span className="route__member">
                Not a member?{" "}
                <Link to="/auth/signup" className="route__ref">
                  Register now
                </Link>
              </span>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default Login;
