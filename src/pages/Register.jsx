import React, { useRef } from "react";
import Input from "components/Input";
import Button from "components/Button";
import { Link } from "react-router-dom";
import Form from "components/Form";
import Header from "components/Header";
import MainContent from "components/Maincontent";
import "styleComponents/Authtorization.css";
import MoonLoader from "react-spinners/MoonLoader";
import { RegisterPattern } from "utils/validationPatterns";
const Register = ({ register, sendData, errors, loading, isValid, watch }) => {
  const { minLength } = RegisterPattern.password;
  const { required } = RegisterPattern;
  const { pattern } = RegisterPattern.email;
  const password = useRef({});
  password.current = watch("password", "");

  return (
    <div className="authorization signin">
      <div className="authorization__inner container">
        <Header />
        <MainContent>
          <h1 className="content-header">{"Register"}</h1>
        </MainContent>

        <Form formClassName="form__register" onSubmit={sendData}>
          <div className="authtorization-form container">
            <Input
              validation={{
                ...register("login", {
                  required,
                }),
              }}
              typeInput="text"
              rootClassName="form-group"
              inputClassName="authtorization-form-signup__login authtorization-form__input"
              placeholder="Login"
            />
            {errors.login && <h1 className="error">{errors.login.message}</h1>}
            <Input
              validation={{
                ...register("email", {
                  required,
                  pattern,
                }),
              }}
              typeInput="text"
              rootClassName="form-group"
              inputClassName="authtorization-form-signup__email authtorization-form__input"
              placeholder="Email"
            />
            {errors.email && <h1 className="error">{errors.email.message}</h1>}

            <Input
              validation={{
                ...register("password", {
                  required,
                  minLength,
                }),
              }}
              showHidden={true}
              typeInput="password"
              rootClassName="form-group"
              inputClassName="authtorization-form-signup__password authtorization-form__input"
              placeholder="Create a Password"
            />
            {errors.password && (
              <h1 className="error">{errors.password.message}</h1>
            )}
            <Input
              validation={{
                ...register("repeatPassword", {
                  required,
                  validate: (fieldValue) =>
                    fieldValue === password.current ||
                    "The passwords do not match",
                }),
              }}
              typeInput="text"
              rootClassName="form-group"
              inputClassName="authtorization-form-signup__repeat-password authtorization-form__input"
              placeholder="Repeat the Password"
            />
            {errors.repeatPassword && (
              <h1 className="error">{errors.repeatPassword.message}</h1>
            )}
            <Button
              isValid={isValid}
              typeBtn={"submit"}
              buttonClassName="authtorization-form__button"
            >
              {loading ? <MoonLoader size={20} /> : "Create an account"}
            </Button>
            <div className="route">
              <span className="route__member">
                Are you a member?{" "}
                <Link to="/auth/signin" className="route__ref">
                  Sign in now
                </Link>
              </span>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default Register;
