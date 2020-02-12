import React, { useContext } from "react";
import {
  SecondSlideShow,
  Slideshow,
  bestSelling,
  Loader
} from "../../utils/utilities";
import { Guitards } from "../../context/GuitadsProvider";
import HomeProductsDisplay from "../sections/HomeProductsDisplay";

const Home = _ => {
  const [guitards] = useContext(Guitards);

  console.log(guitards.loading.get);

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
