import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import LoginComponent from "./pages/Login";
import RegisterComponent from "./pages/Registration";
import Dashboard from "./pages/dashboard/Dashboard";
import Cart from "./pages/Cart";

import { UserLogin } from "../context/LoginProvider";

import "../main.scss";

const Main = _ => {
  const [login] = useContext(UserLogin);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/login"
          component={!login.isLoggedin.get ? LoginComponent : Home}
        />
        <Route
          exact
          path="/register"
          component={!login.isLoggedin.get ? RegisterComponent : Home}
        />
        <Route exact path="/cart" component={Cart} />
        <Route
          exact
          path="/user/dashboard"
          component={login.isLoggedin.get ? Dashboard : Home}
        />
      </Switch>
      <Footer />
    </>
  );
};

export default Main;
