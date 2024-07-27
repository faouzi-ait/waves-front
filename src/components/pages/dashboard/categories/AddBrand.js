import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { resetMessage, createField } from '../../../../utils/utilities';
import { sendAuthenticatedPostRequest } from '../../../../api/UserAccess';
import SubmitBtn from '../../../sections/SubmitBtn';

const AddBrand = (_) => {
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
    const errorMsg = "Couldn't create the new brand";
    setIsLoading(true);

    await sendAuthenticatedPostRequest(
      'https://waves-back-mp2xyzete-altairs-projects-b0a4e876.vercel.app/api/v1/products/newbrand',
      { name: data.name },
      { headers: { Authorization: token } }
    )
      .then((_) => {
        setConfirmation('New brand created');
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
      <div className="addproduct__section--1 newproduct__title top__margin">
        Guitards Brand
      </div>

      <div className="newwood__layout">
        <div className="login__registration">
          {createField(
            'text',
            'name',
            'Guitard Brand',
            errors,
            register,
            'Specify a brand'
          )}
        </div>
        <div className="submit__button">
          <SubmitBtn
            isLoading={isLoading}
            register={register}
            label_1="creating the new brand"
            label_2="create a new brand"
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

export default AddBrand;
