import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { resetMessage, createField } from '../../../../utils/utilities';
import { sendAuthenticatedPostRequest } from '../../../../api/UserAccess';
import SubmitBtn from '../../../sections/SubmitBtn';

const AddWood = (_) => {
  const { register, handleSubmit, errors } = useForm();
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [confirmation, setConfirmation] = useState('');

  useEffect(
    (_) => {
      getToken();
    },
    [token]
  );

  const getToken = async (_) => {
    await setToken(localStorage.getItem('waves_token'));
  };

  const onSubmit = async (data) => {
    const errorMsg = "Couldn't create the new wood";
    setIsLoading(true);

    await sendAuthenticatedPostRequest(
      'https://powerful-pink-antelope.cyclic.app/api/v1/products/newwood',
      { name: data.name },
      { headers: { Authorization: token } }
    )
      .then((_) => {
        setConfirmation('New wood created');
        resetMessage(setConfirmation);
        setIsLoading(false);
        window.location.reload();
      })
      .catch((error) => {
        if (String(error.response.status).startsWith('4')) {
          setError(errorMsg);
        } else if (String(error.response.status).startsWith('5')) {
          setError(errorMsg);
        }
        resetMessage(setError);
        setIsLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="addproduct__section--1 newproduct__title">
        Guitards Wood
      </div>

      <div className="newwood__layout">
        <div className="login__registration">
          {createField(
            'text',
            'name',
            'Guitard Wood',
            errors,
            register,
            'Specify a Wood'
          )}
        </div>
        <div className="submit__button">
          <SubmitBtn
            isLoading={isLoading}
            register={register}
            label_1="creating the new wood"
            label_2="create a new wood"
          />
          {error && <span className="login__error--msg">{error}</span>}
          {confirmation && (
            <span className="login__confirmation--msg">{confirmation}</span>
          )}
        </div>
      </div>
    </form>
  );
};

export default AddWood;
