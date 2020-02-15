import React, { useState, useEffect, createContext } from "react";
import { getGuitardList } from "../api/GuitardCall";

export const Guitards = createContext();

export const GuitardsProvider = props => {
  const [guitardList, setGuitardList] = useState([]);
  const [guitardListByArrival, setGuitardListByArrival] = useState([]);
  const [guitardBrands, setGuitardBrands] = useState([]);
  const [guitardWoods, setGuitardWoods] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isBestSellingLoading, setIsBestSellingLoading] = useState(false);
  const [error, setError] = useState("");

  const getGuitard = async (url, setList) => {
    setIsLoading(true);
    const request = await getGuitardList(url);
    request.data
      ? setList(request.data.records)
      : setError("There was a problem fetching the guitards.");
    setIsLoading(false);
  };

  const initialUrl = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_GUITARD_LIST}`;

  useEffect(
    _ => {
      getGuitard(initialUrl, setGuitardList);
      getGuitard(
        `${initialUrl}?sort=-createdAt&limit=4`,
        setGuitardListByArrival
      );
      getGuitard(`${process.env.REACT_APP_GUITARD_BRANDS}`, setGuitardBrands);
      getGuitard(`${process.env.REACT_APP_GUITARD_WOODS}`, setGuitardWoods);
    },
    [initialUrl]
  );

  const guitards = {
    list: { get: guitardList },
    byArrival: { get: guitardListByArrival },
    byBrands: { get: guitardBrands },
    byWoods: { get: guitardWoods },
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
