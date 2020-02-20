import React from "react";
import { LoginProvider } from "./context/LoginProvider";
import { GuitardsProvider } from "./context/GuitardsProvider";
import Main from "./components/Main";

import "./main.scss";

const App = _ => {
  return (
    <GuitardsProvider>
      <LoginProvider>
        <Main />
      </LoginProvider>
    </GuitardsProvider>
  );
};

export default App;
