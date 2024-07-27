import React, { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Dropzone from 'react-dropzone';

import {
  resetMessage,
  createOptionsDropdown,
  createField,
  createDropdown,
  createFretOption,
} from '../../../utils/utilities';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { sendAuthenticatedPostRequest } from '../../../api/UserAccess';
import { Guitards } from '../../../context/GuitardsProvider';
import SubmitBtn from '../../sections/SubmitBtn';

const AddProducts = (_) => {
  const [guitard] = useContext(Guitards);
  const { register, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState([]);
  const [error, setError] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [token, setToken] = useState('');

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }));

  const classes = useStyles();

  useEffect(
    (_) => {
      getToken();
    },
    [token]
  );

  const getToken = async (_) => {
    await setToken(localStorage.getItem('waves_token'));
  };

  const onSubmit = async (data, e) => {
    const errorMsg = 'There was an error while creating  the new guitard';
    setIsLoading(true);

    await sendAuthenticatedPostRequest(
      'https://waves-back-mp2xyzete-altairs-projects-b0a4e876.vercel.app/api/v1/products/newguitard',
      {
        name: data.name,
        description: data.description,
        price: data.price,
        woods: data.wood,
        brand: data.brand,
        shipping: data.shipping,
        available: data.available,
        images: imageUrl,
        frets: Number(data.fret),
        publish: data.publish,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    )
      .then((_) => {
        setConfirmation('The new guitard was successfully created');
        resetMessage(setConfirmation);
        setIsLoading(false);
        setImageUrl([]);
        e.target.reset();
      })
      .catch((error) => {
        console.log(error.response);
        if (String(error.response.status).startsWith('4')) {
          setError(errorMsg);
        } else if (String(error.response.status).startsWith('5')) {
          setError(errorMsg);
        }
        resetMessage(setError);
        setIsLoading(false);
      });
  };

  // SINGLE FILE UPLOAD v1
  //   const uploadImage = e => {
  //     const files = e.target.files[0];
  //     const formData = new FormData();

  //     formData.append("upload_preset", "v4b6idgm");
  //     formData.append("file", files);

  //     axios
  //       .post("https://api.cloudinary.com/v1_1/dav8ajo38/image/upload", formData)
  //       .then(res => setImageUrl(res.data.secure_url))
  //       .catch(err => console.log(err));
  //   };

  const handleUploadImages = (images) => {
    let uploads = images.map((image) => {
      let imageList = [];
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset', 'v4b6idgm');
      formData.append('timestamp', (Date.now() / 1000) | 0);

      return axios
        .post(
          'https://api.cloudinary.com/v1_1/dav8ajo38/image/upload',
          formData,
          {
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
            },
          }
        )
        .then(setImageLoading(true))
        .then((response) => {
          imageList = [...imageUrl, response.data.secure_url];
          setImageUrl(imageList);
        });
    });

    // We would use axios `.all()` method to perform concurrent image upload to cloudinary.
    axios.all(uploads).then(() => {
      setImageLoading(false);
    });
  };

  console.log(imageUrl);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="newproduct__container newproduct__title">
          Add a new guitard
        </div>

        <div className="addproduct__section--1 newproduct__title">
          Add a Picture
        </div>

        <Dropzone onDrop={handleUploadImages} multiple accept="image/*">
          {({ getRootProps, getInputProps }) => {
            return (
              <div {...getRootProps()} className="dropzone">
                <input {...getInputProps()} />
                {imageUrl.length === 0 ? (
                  <div className="zone__layout">
                    <div className="dropzone__zone">
                      <div>
                        {!imageLoading && (
                          <div>
                            <i className="fa fa-search-plus dropzone__zone--icon"></i>
                          </div>
                        )}
                      </div>
                      {imageLoading ? (
                        <div className={classes.root}>
                          <CircularProgress />
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                    <div className="dropzone__message">
                      <p>Click to upload or drag and drop here</p>
                      <p className="dropzone__message--advice">
                        For optimal display quality, the images should be
                        340x340
                      </p>
                    </div>
                  </div>
                ) : (
                  imageUrl.map((url) => (
                    <img
                      className="setting-image"
                      src={url}
                      alt=""
                      width="20%"
                      height="100%"
                    />
                  ))
                )}
              </div>
            );
          }}
        </Dropzone>

        {/* SINGLE FILE UPLOAD v1 */}
        {/* <div className="">
          <label htmlFor="file-upload" className="custom-file-upload">
            <i className="fa fa-cloud-upload"></i> Custom Upload
          </label>
          <input
            type="file"
            name="file"
            id="file-upload"
            onChange={uploadImage}
          />
        </div>
        {imageUrl && <img className="setting-image" src={imageUrl} alt="" />} */}

        <div className="addproduct__section--1 newproduct__title">
          Guitards Details
        </div>

        <div className="login__registration registration__field add__product--part1">
          {createField(
            'text',
            'name',
            'Guitard Name',
            errors,
            register,
            'Specify a name'
          )}

          {createField(
            'text',
            'description',
            'Guitard description',
            errors,
            register,
            'Specify a description'
          )}

          {createField(
            'number',
            'price',
            'Price',
            errors,
            register,
            'Price Required'
          )}
        </div>

        <div className="addproduct__section--1 newproduct__title">
          Brand & Wood Type
        </div>
        <div className="login__registration registration__field add__product--part2">
          {createDropdown(
            'brand',
            guitard.byBrands.get,
            'Select a Brand',
            errors,
            register,
            'Specify a brand'
          )}

          {createDropdown(
            'wood',
            guitard.byWoods.get,
            'Select a wood',
            errors,
            register,
            'Specify a type of wood'
          )}
        </div>

        <div className="addproduct__section--1 newproduct__title">Delivery</div>
        <div className="login__registration registration__field add__product--part3">
          {createOptionsDropdown(
            'shipping',
            errors,
            register,
            'Shipping',
            'Is Shipping?'
          )}

          {createOptionsDropdown(
            'available',
            errors,
            register,
            'Available',
            'Is Available?'
          )}
          {createFretOption('fret', errors, register, 'Fret', 'Fret values?')}
          {createOptionsDropdown(
            'publish',
            errors,
            register,
            'Publish',
            'Is Publish?'
          )}
        </div>

        <SubmitBtn
          isLoading={isLoading}
          register={register}
          label_1="creating the new guitard"
          label_2="create a new guitard"
        />
        {error && <span className="login__error--msg">{error}</span>}
        {confirmation && (
          <span className="login__confirmation--msg">{confirmation}</span>
        )}
      </form>
    </div>
  );
};

export default AddProducts;
