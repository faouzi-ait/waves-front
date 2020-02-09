import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserLogin } from "../../context/DataProvider";

const LoginComponent = () => {
  const { register, handleSubmit, errors } = useForm();
  const [login] = useContext(UserLogin);

  console.log(login);

  const onSubmit = async data => {
    console.log(data);
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__container--left">
          <div className="login__title">new customers</div>
          <div className="login__new">
            Post haec Gallus Hierapolim profecturus ut expeditioni specie tenus
            adesset, Antiochensi plebi suppliciter obsecranti ut inediae
            dispelleret metum, quae per multas difficilisque causas adfore.
          </div>
          <a href="/register" className="login__button">
            create an account
          </a>
        </div>
        <div className="login__container--right">
          <div className="login__title">registered customers</div>
          <div className="login__new">
            If you are already registered with us, please log in.
          </div>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="login__form">
              <div className="login__email">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email"
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

              <div className="login__password">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your password"
                  className={errors.password ? "error" : ""}
                  autoComplete="off"
                  ref={register({ required: true })}
                />
                {errors.password && errors.password.type === "required" && (
                  <p className="login__error">Please type in your password</p>
                )}
              </div>
              <button className="login__button login__bold" onClick={register}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
