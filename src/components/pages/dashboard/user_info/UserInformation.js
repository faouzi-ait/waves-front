import React from "react";

const UserInformation = ({ currentUser }) => {
  return (
    <>
      <div className="login__title">user information</div>
      <div className="dashboard__main--details">
        <ul>
          <li>{currentUser.name}</li>
          <li>{currentUser.lastname}</li>
          <li>{currentUser.email}</li>
        </ul>
        <button className="login__button login__bold">edit account</button>
      </div>
    </>
  );
};

export default UserInformation;
