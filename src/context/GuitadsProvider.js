import React, { useState, useEffect, createContext } from "react";
import { getGuitardList } from "../api/GuitardCall";

export const Guitards = createContext();

export const GuitardsProvider = props => {
  const [guitardList, setGuitardList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [initialUrl, setInitialUrl] = useState(
    `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_GUITARD_LIST}`
  );

  useEffect(
    _ => {
      setIsLoading(true);
      const getGuitards = async url => {
        const request = await getGuitardList(url);
        request.data
          ? setGuitardList(request.data.guitards)
          : setError("There was a problem fetching the guitards.");
      };
      getGuitards(initialUrl);
      setIsLoading(false);
    },
    [initialUrl]
  );

  const guitards = {
    list: { get: guitardList, set: setGuitardList },
    url: { get: initialUrl, set: setInitialUrl },
    loading: { get: isLoading, set: setIsLoading },
    error: { get: error, set: setError }
  };

  const actions = {};

  return (
    <Guitards.Provider value={[guitards, actions]}>
      {props.children}
    </Guitards.Provider>
  );
};
