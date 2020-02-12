import React, { useState, useEffect, createContext } from "react";

export const Guitards = createContext();

export const GuitardsProvider = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [guitardsList, setGuitardsList] = useState([]);

  useEffect(_ => {
    // AXIOS GUITARDS HERE
  }, []);

  const guitards = {
    guitards: { get: guitardsList, set: setGuitardsList },
    isLoading: { get: isLoading, set: setIsLoading }
  };

  return <Guitards.Provider value={[guitards]}>{props.children}</Guitards.Provider>;
};
