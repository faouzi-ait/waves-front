import React from "react";
import { Tabs, useTabState, usePanelState } from "@bumaga/tabs";
import MainAccount from "./MainAccount";
import MyAccount from "./account/MyAccount";
import Cart from "./cart/Cart";

const Dashboard = _ => {
  const Tab = ({ children }) => {
    const { onClick } = useTabState();

    return <p onClick={onClick}>{children}</p>;
  };

  const Panel = ({ children }) => {
    const isActive = usePanelState();

    return isActive ? <p>{children}</p> : null;
  };

  return (
    <Tabs>
      <div className="dashboard">
        <div className="dashboard__container">
          <div className="dashboard__menu">
            <div>
              <div className="login__title title--menu">my account</div>
              <div className="dashboard__main--details">
                <ul className="dashboard__menu--list">
                  <li>
                    <Tab>User Information</Tab>
                  </li>
                  <li>
                    <Tab>My Account</Tab>
                  </li>
                  <li>
                    <Tab>My Cart</Tab>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="login__title title--menu admin--menu">Admin</div>
              <div className="dashboard__main--details">
                <ul className="dashboard__menu--list">
                  <li>Site Info</li>
                  <li>Add Products</li>
                  <li>Manage Categories</li>
                </ul>
              </div>
            </div>
          </div>
          <Panel>
            <MainAccount />
          </Panel>
          <Panel>
            <MyAccount />
          </Panel>
          <Panel>
            <Cart />
          </Panel>
        </div>
      </div>
    </Tabs>
  );
};

export default Dashboard;
