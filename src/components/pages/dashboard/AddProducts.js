import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import {
  resetMessage,
  createOptionsDropdown,
  createField,
  createDropdown,
  createFretOption
} from "../../../utils/utilities";
import { sendAuthenticatedPostRequest } from "../../../api/UserAccess";
import { Guitards } from "../../../context/GuitardsProvider";
import SubmitBtn from "../../sections/SubmitBtn";

const AddProducts = _ => {
  const [guitard] = useContext(Guitards);
  const { register, handleSubmit, errors } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [token, setToken] = useState("");

  useEffect(
    _ => {
      getToken();
    },
    [token]
  );

  const getToken = async _ => {
    await setToken(localStorage.getItem("waves_token"));
  };

  const onSubmit = async (data, e) => {
    const errorMsg = "There was an error while creating  the new guitard";
    setIsLoading(true);

    await sendAuthenticatedPostRequest(
      "https://waves-faouzi.herokuapp.com/api/v1/products/newguitard",
      {
        name: data.name,
        description: data.description,
        price: data.price,
        woods: data.wood,
        brand: data.brand,
        shipping: data.shipping,
        available: data.available,
        frets: Number(data.fret),
        publish: data.publish
      },
      {
        headers: {
          Authorization: token
        }
      }
    )
      .then(_ => {
        setConfirmation("The new guitard was successfully created");
        resetMessage(setConfirmation);
        setIsLoading(false);
        e.target.reset();
      })
      .catch(error => {
        if (String(error.response.status).startsWith("4")) {
          setError(errorMsg);
        } else if (String(error.response.status).startsWith("5")) {
          setError(errorMsg);
        }
        resetMessage(setError);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="newproduct__container newproduct__title">
          Add a new product
        </div>

        <div className="addproduct__section--1 newproduct__title">
          Guitards Details
        </div>

        <div className="login__registration registration__field add__product--part1">
          {createField(
            "text",
            "name",
            "Guitard Name",
            errors,
            register,
            "Specify a name"
          )}

          {createField(
            "text",
            "description",
            "Guitard description",
            errors,
            register,
            "Specify a description"
          )}

          {createField(
            "number",
            "price",
            "Price",
            errors,
            register,
            "Price Required"
          )}
        </div>

        <div className="addproduct__section--1 newproduct__title">
          Brand & Wood Type
        </div>
        <div className="login__registration registration__field add__product--part2">
          {createDropdown(
            "brand",
            guitard.byBrands.get,
            "Select a Brand",
            errors,
            register,
            "Specify a brand"
          )}

          {createDropdown(
            "wood",
            guitard.byWoods.get,
            "Select a wood",
            errors,
            register,
            "Specify a type of wood"
          )}
        </div>

        <div className="addproduct__section--1 newproduct__title">
          Delivery
        </div>
        <div className="login__registration registration__field add__product--part3">
          {createOptionsDropdown(
            "shipping",
            errors,
            register,
            "Shipping",
            "Is Shipping?"
          )}

          {createOptionsDropdown(
            "available",
            errors,
            register,
            "Available",
            "Is Available?"
          )}
          {createFretOption("fret", errors, register, "Fret", "Fret values?")}
          {createOptionsDropdown(
            "publish",
            errors,
            register,
            "Publish",
            "Is Publish?"
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
