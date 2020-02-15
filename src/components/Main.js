import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { GuitardsProvider } from "../context/GuitardsProvider";

import Home from "./pages/Home";
import Guitards from "./pages/Guitards";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import LoginComponent from "./pages/Login";
import RegisterComponent from "./pages/Registration";
import Dashboard from "./pages/dashboard/Dashboard";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";

import { UserLogin } from "../context/LoginProvider";

import "../main.scss";

const Main = _ => {
  const [login] = useContext(UserLogin);

  return (
    <>
      <GuitardsProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/guitards" component={Guitards} />
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
