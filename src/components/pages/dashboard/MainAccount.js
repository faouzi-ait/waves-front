import React, { useState, useEffect } from "react";
import UserInformation from "./user_info/UserInformation";
import UserPurchasesList from "./user_info/UserPurchasesList";

const DashboardMain = _ => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(_ => {
    setCurrentUser(JSON.parse(localStorage.getItem("waves_user")));
  }, []);

  console.log(currentUser);

  return (
    <div className="dashboard__main">
      <div className="dashboard__top">
        <UserInformation currentUser={currentUser} />
      </div>
      <div className="dashboard__bottom">
        <UserPurchasesList />
      </div>
    </div>
  );
};

export default DashboardMain;
