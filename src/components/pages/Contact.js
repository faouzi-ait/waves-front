import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  resetMessage,
  createField,
  createEmailField
} from "../../utils/utilities";
import { sendPostRequest } from "../../api/UserAccess";
import SubmitBtn from "../sections/SubmitBtn";

const Contact = _ => {
  const { register, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const onSubmit = async (data, e) => {
    setIsLoading(true);
    await sendPostRequest(
      "https://waves-faouzi.herokuapp.com/api/v1/contact/message",
      {
        name: data.name,
        lastname: data.lastname,
        email: data.email,
        message: data.note
      }
    )
      .then(result => {
        setConfirmation(result.data.message);
        setIsLoading(false);
        resetMessage(setConfirmation);
        e.target.reset();
      })
      .catch(error => {
        if (String(error.response.status).startsWith("4")) {
          setError(error.response.data.message);
        } else if (String(error.response.status).startsWith("5")) {
          setError("The message could not be sent, please try again later");
        }
        resetMessage(setError);
      });
  };

  return (
    <div className="cart">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="registration__container">
          <div className="login__title">send us a note to say hi!</div>

          <div className="login__registration registration__field">
            {createField(
              "text",
              "name",
              "Enter you name",
              errors,
              register,
              "Please type in your name"
            )}

            {createField(
              "text",
              "lastname",
              "Enter you lastname",
              errors,
              register,
              "Please type in your lastname"
            )}
          </div>

          <div className="login__email registration__email">
            {createEmailField("email", errors, register)}
          </div>

          <div className="login__title registration__account">your message</div>

          <div className="login__email registration__email">
            <textarea
              type="note"
              name="note"
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
          {confirmation && (
            <span className="login__confirmation--msg">{confirmation}</span>
          )}
        </div>
      </form>
    </div>
  );
};

export default Contact;
