import React from "react";
import { useTabState, usePanelState } from "@bumaga/tabs";
import MainAccount from "../components/pages/dashboard/MainAccount";
import MyAccount from "../components/pages/dashboard/account/MyAccount";

export const resetError = setError => {
  setTimeout(() => {
    setError("");
  }, 4000);
};

export const Tab = ({ children }) => {
  const { onClick } = useTabState();

  return <p onClick={onClick}>{children}</p>;
};

export const Panel = ({ children }) => {
  const isActive = usePanelState();

  return isActive ? <span>{children}</span> : null;
};

export const dashboardMenu = _ => {
  return (
    <>
      <div className="login__title title--menu">my account</div>
      <div className="dashboard__main--details">
        <ul className="dashboard__menu--list">
          <li>
            <Tab>User Information</Tab>
          </li>
          <li>
            <Tab>My Account</Tab>
          </li>
        </ul>
      </div>
    </>
  );
};

export const dashboardAdminMenu = _ => {
  return (
    <>
      <div className="login__title title--menu admin--menu">Admin</div>
      <div className="dashboard__main--details">
        <ul className="dashboard__menu--list">
          <li>Site Info</li>
          <li>Add Products</li>
          <li>Manage Categories</li>
        </ul>
      </div>
    </>
  );
};

export const dashboardPanel = _ => {
  return (
    <>
      <Panel>
        <MainAccount />
      </Panel>
      <Panel>
        <MyAccount />
      </Panel>
    </>
  );
};
