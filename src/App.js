import React from "react";
import { LoginProvider } from "./context/LoginProvider";
import Main from "./components/Main";

import "./main.scss";

const App = _ => {
  return (
    <LoginProvider>
      <Main />
    </LoginProvider>
  );
};

export default App;
