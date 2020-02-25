import React from "react";

const UserInformation = ({ currentUser }) => {
  return (
    <>
      <div className="login__title text__centered">user information</div>
      <div className="dashboard__main--details">
        <ul>
          <li>Name: {currentUser.name}</li>
          <li>Last name: {currentUser.lastname}</li>
          <li>Email: {currentUser.email}</li>
        </ul>
      </div>
    </>
  );
};

export default UserInformation;
