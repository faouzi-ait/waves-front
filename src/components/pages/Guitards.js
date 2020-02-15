import React, { useState, useContext } from "react";
import { GuitardsTitle } from "../../utils/utilities";
import GuitardsFilter from "../sections/GuitardsFilter";
import HomeProductsDisplay from "../sections/ProductsDisplay";
import { Loader } from "../../utils/utilities";

import { Guitards } from "../../context/GuitardsProvider";

const Guitard = _ => {
  const [guitards] = useContext(Guitards);
  const [brandList, setBrandList] = useState([]);
  const [woodList, setWoodList] = useState([]);

  //console.log(guitards.byBrands.get);
  //console.log(guitards.byWoods.get);

  const getNameItem = (e, list, FilteredList) => {
    if (e.target.checked) {
      const selectedBrand = [...FilteredList, e.target.value];
      list(selectedBrand);
    } else {
      const currentBrand = FilteredList.filter(item => item !== e.target.value);
      list(currentBrand);
    }
  };

  const getBrands = e => {
    getNameItem(e, setBrandList, brandList);
  };

  const getWoods = e => {
    getNameItem(e, setWoodList, woodList);
  };

  console.log(guitards.list.get);

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
        </div>
        <div className="guitard__right">
          {!guitards.loading.get ? (
            <HomeProductsDisplay
              list={guitards.list.get}
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
