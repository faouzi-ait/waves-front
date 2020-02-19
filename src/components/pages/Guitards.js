import React, { useState, useContext } from "react";
import { GuitardsTitle } from "../../utils/utilities";
import GuitardsFilter from "../sections/GuitardsFilter";
import GuitardPrice from "../sections/GuitardPrice";
import HomeProductsDisplay from "../sections/ProductsDisplay";
import { Loader } from "../../utils/utilities";

import { Guitards } from "../../context/GuitardsProvider";

const Guitard = _ => {
  const [guitards] = useContext(Guitards);
  const [brandList, setBrandList] = useState([]);
  const [woodList, setWoodList] = useState([]);
  const [priceFilter, setPriceFilter] = useState("");

  const getNameItem = (e, list, FilteredList) => {
    if (e.target.checked) {
      const selectedBrand = [...FilteredList, e.target.value];
      list(selectedBrand);
    } else {
      const currentBrand = FilteredList.filter(item => item !== e.target.value);
      list(currentBrand);
    }
  };

  const filterList =
    brandList.length !== 0 || woodList.length !== 0
      ? guitards.list.get.filter(
          item =>
            brandList.includes(item.brand.name) ||
            woodList.includes(item.woods.name)
        )
      : guitards.list.get;

  const filterPriceList =
    priceFilter !== ""
      ? filterList.filter(item => {
          if (priceFilter === "l500") {
            return item.price < 500;
          } else if (priceFilter === "b500&1000") {
            return item.price > 500 && item.price < 1000;
          } else if (priceFilter === "all") {
            return item;
          } else if (priceFilter === "m1000") {
            return item.price > 1000;
          }
        })
      : filterList;

  const getBrands = e => {
    getNameItem(e, setBrandList, brandList);
  };

  const getWoods = e => {
    getNameItem(e, setWoodList, woodList);
  };

  const getPrice = price => {
    if (price) {
      setPriceFilter(price);
    } else {
      setPriceFilter("");
    }
  };

  return (
    <div className="guitards__home">
      <GuitardsTitle title="browse products" />
      <div className="guitards__home--container">
        <div className="guitard__left">
          <GuitardsFilter
            list={guitards.byBrands.get}
            label="Brands"
            getName={getBrands}
          />
          <GuitardsFilter
            list={guitards.byWoods.get}
            label="Woods"
            getName={getWoods}
          />
          <GuitardPrice
            list={guitards.byWoods.get}
            label="Prices"
            getName={getPrice}
          />
        </div>
        <div className="guitard__right">
          {!guitards.loading.get ? (
            <HomeProductsDisplay
              list={filterPriceList}
              classfix="best__item--card--fix"
              classFix_2="home__best--items--fix"
            />
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default Guitard;
