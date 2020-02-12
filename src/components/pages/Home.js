import React, { useContext } from "react";
import { SecondSlideShow, Slideshow } from "../../utils/utilities";
import { Guitards } from "../../context/GuitadsProvider";

const Home = _ => {
  const [guitards] = useContext(Guitards);

  console.log(guitards.list.get);

  return (
    <div className="home home__container">
      <Slideshow />
      <SecondSlideShow />
    </div>
  );
};

export default Home;
