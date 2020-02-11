import React, { useState, useEffect } from "react";
import { Tabs } from "@bumaga/tabs";
import {
  dashboardMenu,
  dashboardAdminMenu,
  dashboardPanel
} from "../../../utils/utilities";

const Dashboard = _ => {
  const [isAdmin, setIsAdmin] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem("waves_user"));

  useEffect(
    _ => {
      setIsAdmin(currentUser.isAdmin);
    },
    [currentUser]
  );
  return (
    <Tabs>
      <div className="dashboard">
        <div className="dashboard__container">
          <div className="dashboard__menu">
            <div>{dashboardMenu()}</div>
            {isAdmin && <div>{dashboardAdminMenu()}</div>}
          </div>
          {dashboardPanel()}
        </div>
      </div>
    </Tabs>
  );
};

export default Dashboard;
