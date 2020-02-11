import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { resetError } from "../../utils/utilities";
import { registerUser } from "../../api/UserAccess";
import SubmitBtn from "../sections/SubmitBtn";

const Registration = _ => {
  const { register, watch, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  let history = useHistory();

  const onSubmit = async data => {
    setIsLoading(true);
    await registerUser("https://waves-faouzi.herokuapp.com/api/v1/register", {
      name: data.name,
      surname: data.lastname,
      email: data.email,
      password: data.password
    })
      .then(_ => {
        history.push("/login");
      })
      .catch(error => {
        if (String(error.response.status).startsWith("4")) {
          setError(error.response.data.message);
        } else if (String(error.response.status).startsWith("5")) {
          setError(
            "There was an error while trying to log you in, please try again later"
          );
        }
        resetError(setError);
        setIsLoading(false);
      });
  };

  return (
    <div className="registration">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="registration__container">
          <div className="login__title">personal information</div>

          <div className="login__registration registration__field">
            <div>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className={errors.name ? "error" : ""}
                autoComplete="off"
                ref={register({ required: true })}
              />
              {errors.name && errors.name.type === "required" && (
                <p className="login__error">Please type in your name</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Enter your lastname"
                className={errors.lastname ? "error" : ""}
                autoComplete="off"
                ref={register({ required: true })}
              />
              {errors.lastname && errors.lastname.type === "required" && (
                <p className="login__error">Please type in your lastname</p>
              )}
            </div>
          </div>
          <div className="login__email registration__email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className={errors.email ? "error" : ""}
              autoComplete="off"
              ref={register({
                required: " ",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Email format: you@yourmail.com"
                }
              })}
            />
            {errors.email && errors.email.type === "required" && (
              <p className="login__error">Please type in your email</p>
            )}
            {errors.email && errors.email.message && (
              <p className="login__error">{errors.email.message}</p>
            )}
          </div>

          <div className="login__title registration__account">
            account information
          </div>
          <div className="login__registration registration__field">
            <div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className={errors.name ? "error" : ""}
                autoComplete="off"
                ref={register({
                  required: true,
                  validate: value => value === watch("confirmPassword")
                })}
              />
              {errors.password && errors.password.type === "required" && (
                <p className="login__error">Please type in your password</p>
              )}
              {errors.password && (
                <p className="login__error">Both passwords must match</p>
              )}
            </div>
            <div>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm your password"
                className={errors.lastname ? "error" : ""}
                autoComplete="off"
                ref={register({ required: true })}
              />
              {errors.lastname && errors.lastname.type === "required" && (
                <p className="login__error">Confirm your password</p>
              )}
            </div>
          </div>
          <SubmitBtn
            isLoading={isLoading}
            register={register}
            label_1="creating your account"
            label_2="create your account"
          />
          {error && <span className="login__error--msg">{error}</span>}
        </div>
      </form>
    </div>
  );
};

export default Registration;
