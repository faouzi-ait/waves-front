import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { resetError } from "../../utils/utilities";
import { sendMail } from "../../api/UserAccess";
import SubmitBtn from "../sections/SubmitBtn";

const Contact = _ => {
  const { register, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  let history = useHistory();

  const onSubmit = async data => {
    setIsLoading(true);
    console.log(data)
    setIsLoading(false);
   //  await sendMail("https://waves-faouzi.herokuapp.com/api/v1/send", {
   //    name: data.name,
   //    surname: data.lastname,
   //    email: data.email,
   //    password: data.password
   //  })
   //    .then(_ => {
   //      history.push("/login");
   //    })
   //    .catch(error => {
   //      if (String(error.response.status).startsWith("4")) {
   //        setError(error.response.data.message);
   //      } else if (String(error.response.status).startsWith("5")) {
   //        setError("The message could not be sent, please try again later");
   //      }
   //      resetError(setError);
   //      setIsLoading(false);
   //    });
  };

  return (
    <div className="cart">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="registration__container">
          <div className="login__title">send us a note to say hi!</div>

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

          <div className="login__title registration__account">your message</div>

          <div className="login__email registration__email">
            <textarea
              type="note"
              name="note"
              id="note"
              rows="4"
              cols="109"
              placeholder="Enter your message"
              className={errors.note ? "error" : ""}
              autoComplete="off"
              ref={register({ required: true })}
            ></textarea>
            {errors.note && errors.note.type === "required" && (
              <p className="login__error">Please type in your message</p>
            )}
          </div>
          <SubmitBtn
            isLoading={isLoading}
            register={register}
            label_1="sending your message"
            label_2="send message"
          />
          {error && <span className="login__error--msg">{error}</span>}
        </div>
      </form>
    </div>
  );
};

export default Contact;
