import React, { useState, useEffect, createContext } from "react";

export const UserLogin = createContext();

export const LoginProvider = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState();
  const [user, setUser] = useState({});

  useEffect(_ => {
    const currentToken = localStorage.getItem("waves_token");

    if (currentToken && currentToken !== undefined) {
      setToken(localStorage.getItem("waves_token"));
      setUser(JSON.parse(localStorage.getItem("waves_user")));
      setIsLoggedIn(true);
    } else {
      setToken(undefined);
      setUser(null);
      setIsLoggedIn(false);
    }
  }, []);

  const login = {
    user: { get: user, set: setUser },
    token: { get: token, set: setToken },
    isLoggedin: { get: isLoggedIn, set: setIsLoggedIn }
  };

  return (
    <UserLogin.Provider value={[login]}>{props.children}</UserLogin.Provider>
  );
};
