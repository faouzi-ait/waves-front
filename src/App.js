import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/layout/Home";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import LoginComponent from "./components/access/Login";
import RegisterComponent from "./components/access/Registration";

import { DataProvider } from "./context/DataProvider";

import "./main.scss";

const App = _ => {
  return (
    <DataProvider>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginComponent} />
        <Route exact path="/register" component={RegisterComponent} />
      </Switch>
      <Footer />
    </DataProvider>
  );
};

export default App;
