import React from "react";
import { useForm } from "react-hook-form";

const Registration = _ => {
  const { register, watch, handleSubmit, errors } = useForm();

  const onSubmit = async data => {
    console.log(data);
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
              {/* {errors.password && errors.password.validate && (
                <p className="login__error">{errors.password.validate}</p>
              )} */}
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
          <button className="login__button login__bold" onClick={register}>
            create your account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
