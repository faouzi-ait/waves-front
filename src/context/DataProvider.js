import React, { useState, useEffect, createContext } from "react";

export const UserLogin = createContext();

export const DataProvider = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState();

  useEffect(_ => {
    const currentToken = localStorage.getItem("waves_token");

    currentToken && currentToken !== undefined
      ? setToken(localStorage.getItem("waves_token"))
      : setToken(undefined);
  }, []);

  const login = {
    check: { get: isLoggedIn, set: setIsLoggedIn },
    token: { get: token, set: setToken }
  };

  return (
    <UserLogin.Provider value={[login]}>{props.children}</UserLogin.Provider>
  );
};
