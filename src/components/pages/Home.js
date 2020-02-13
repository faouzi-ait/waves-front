import React, { useContext } from "react";
import {
  SecondSlideShow,
  Slideshow,
  bestSelling,
  Loader
} from "../../utils/utilities";
import HomeProductsDisplay from "../sections/ProductsDisplay";
import { Guitards } from "../../context/GuitardsProvider";

const Home = _ => {
  const [guitards] = useContext(Guitards);

  return (
    <div className="home home__container">
      <Slideshow />
      {!guitards.loading.get ? (
        <HomeProductsDisplay
          list={bestSelling(guitards)}
          title="best selling guitards"
        />
      ) : (
        <Loader />
      )}
      <SecondSlideShow />
      {!guitards.loadingBestSelling.get ? (
        <HomeProductsDisplay
          list={guitards.byArrival.get}
          title="new arrivals"
        />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Home;
