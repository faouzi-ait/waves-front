import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { GuitardsProvider } from "../context/GuitardsProvider";

import Home from "./pages/Home";
import Guitard from "./pages/Guitards";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import LoginComponent from "./pages/Login";
import RegisterComponent from "./pages/Registration";
import Dashboard from "./pages/dashboard/Dashboard";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Modal from "./sections/Modal";

import { UserLogin } from "../context/LoginProvider";
import { Guitards } from "../context/GuitardsProvider";

import "../main.scss";

const Main = _ => {
  const [login] = useContext(UserLogin);
  const [guitards] = useContext(Guitards);

  return (
    <>
      <GuitardsProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/guitards" component={Guitard} />
          <Route exact path="/contact" component={Contact} />
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
      </GuitardsProvider>
    </>
  );
};

export default Main;
