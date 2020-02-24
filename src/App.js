import React from "react";
import { LoginProvider } from "./context/LoginProvider";
import { GuitardsProvider } from "./context/GuitardsProvider";
import { ShoppingCartProvider } from "./context/ShoppingCartProvider";
import Main from "./components/Main";

import "./main.scss";

const App = _ => {
  return (
    <GuitardsProvider>
      <ShoppingCartProvider>
        <LoginProvider>
          <Main />
        </LoginProvider>
      </ShoppingCartProvider>
    </GuitardsProvider>
  );
};

export default App;
