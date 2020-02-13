import React, { useState, useEffect, createContext } from "react";
import { getGuitardList } from "../api/GuitardCall";

export const Guitards = createContext();

export const GuitardsProvider = props => {
  const [guitardList, setGuitardList] = useState([]);
  const [guitardListByArrival, setGuitardListByArrival] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isBestSellingLoading, setIsBestSellingLoading] = useState(false);
  const [error, setError] = useState("");
  const [initialUrl, setInitialUrl] = useState(
    `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_GUITARD_LIST}`
  );
  const [byArrivalUrl, setByArrivalUrl] = useState(
    `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_GUITARD_LIST}?sort=createdAt&limit=4`
  );

  const getGuitards = async url => {
    setIsLoading(true);
    const request = await getGuitardList(url);
    request.data
      ? setGuitardList(request.data.guitards)
      : setError("There was a problem fetching the guitards.");
    setIsLoading(false);
  };

  const getGuitardsByArrival = async url => {
    setIsBestSellingLoading(true);
    const request = await getGuitardList(url);
    request.data
      ? setGuitardListByArrival(request.data.guitards)
      : setError("There was a problem fetching the guitards.");
    setIsBestSellingLoading(false);
  };

  useEffect(
    _ => {
      getGuitards(initialUrl);
      getGuitardsByArrival(byArrivalUrl);
    },
    [initialUrl, byArrivalUrl]
  );

  const guitards = {
    list: { get: guitardList, set: setGuitardList },
    byArrival: { get: guitardListByArrival, set: setByArrivalUrl },
    url: { get: initialUrl, set: setInitialUrl },
    loading: { get: isLoading, set: setIsLoading },
    loadingBestSelling: {
      get: isBestSellingLoading,
      set: setIsBestSellingLoading
    },
    error: { get: error, set: setError }
  };

  return (
    <Guitards.Provider value={[guitards]}>{props.children}</Guitards.Provider>
  );
};
