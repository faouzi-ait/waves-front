import React from "react";
import "./main.scss";

const App = _ => {
  return (
    <div className="App">
      <p className="para">{process.env.REACT_APP_TEST}</p>
    </div>
  );
};

export default App;
