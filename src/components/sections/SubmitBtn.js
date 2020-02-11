import React from "react";

const SubmitBtn = ({ isLoading, register, label_1, label_2 }) => {
  return (
    <button className="login__button login__bold" onClick={register}>
      {isLoading ? (
        <>
          {label_1} <i className="fa fa-spinner spinner-rotate"></i>
        </>
      ) : (
        label_2
      )}
    </button>
  );
};

export default SubmitBtn;
