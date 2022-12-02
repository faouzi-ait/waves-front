import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  resetMessage,
  createField,
  createEmailField,
} from '../../utils/utilities';
import { sendPostRequest } from '../../api/UserAccess';
import SubmitBtn from '../sections/SubmitBtn';

const Registration = (_) => {
  const { register, watch, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  let history = useHistory();

  const onSubmit = async (data, e) => {
    setIsLoading(true);
    await sendPostRequest(
      'https://powerful-pink-antelope.cyclic.app/api/v1/register',
      {
        name: data.name,
        surname: data.lastname,
        email: data.email,
        password: data.password,
      }
    )
      .then((_) => {
        e.target.reset();
        history.push('/login');
      })
      .catch((error) => {
        if (String(error.response.status).startsWith('4')) {
          setError(error.response.data.message);
        } else if (String(error.response.status).startsWith('5')) {
          setError(
            'There was an error while trying to log you in, please try again later'
          );
        }
        resetMessage(setError);
        setIsLoading(false);
      });
  };

  return (
    <div className="registration">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="registration__container">
          <div className="login__title">personal information</div>

          <div className="login__registration registration__field">
            {createField(
              'text',
              'name',
              'Enter you name',
              errors,
              register,
              'Please type in your name'
            )}

            {createField(
              'text',
              'lastname',
              'Enter you lastname',
              errors,
              register,
              'Please type in your lastname'
            )}
          </div>
          <div className="login__email registration__email">
            {createEmailField('email', errors, register)}
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
                className={errors.name ? 'error' : ''}
                autoComplete="off"
                ref={register({
                  required: true,
                  validate: (value) => value === watch('confirmPassword'),
                })}
              />
              {errors.password && errors.password.type === 'required' && (
                <p className="login__error">Please type in your password</p>
              )}
              {errors.password && (
                <p className="login__error">Both passwords must match</p>
              )}
            </div>

            {createField(
              'password',
              'confirmPassword',
              'Confirm your password',
              errors,
              register,
              'Confirm your password'
            )}
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
