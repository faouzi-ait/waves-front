import React from "react";
import { Fade } from "react-slideshow-image";

const Home = _ => {
  const slideImages = [
    {
      url: "/images/featured/featured_home.jpg",
      lineOne: "Fender",
      lineTwo: "Custom Shop",
      linkTitle: "Shop Now",
      linkTo: "/shop"
    },
    {
      url: "/images/featured/featured_home_2.jpg",
      lineOne: "B-Stock",
      lineTwo: "Awesome Discount",
      linkTitle: "View Offers",
      linkTo: "/shop"
    }
  ];

  const featuredHomeLast = {
    url: "/images/featured/featured_home_3.jpg",
    lineOne: "UP TO 40% OFF",
    lineTwo: "IN SECOND HAND GUITARDS",
    linkTitle: "Shop Now",
    linkTo: "/shop"
  };

  const properties = {
    duration: 2000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: false,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  };

  const Slideshow = _ => {
    return (
      <div className="slide-container">
        <Fade {...properties}>
          {slideImages.map((item, i) => {
            return (
              <div
                style={{
                  backgroundImage: `url(${item.url})`,
                  height: `${window.innerHeight}px`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover"
                }}
                key={i}
              >
                <div className="line">
                  <div className="line__one">{item.lineOne}</div>
                  <div className="line__two">{item.lineTwo}</div>
                  <a
                    href={item.linkTo}
                    className="login__button login__bold link__btn"
                  >
                    {item.linkTitle}
                  </a>
                </div>
              </div>
            );
          })}
        </Fade>
      </div>
    );
  };

  const SecondSlideShow = _ => {
    return (
      <div
        style={{
          backgroundImage: `url(${featuredHomeLast.url})`,
          height: `50vh`
        }}
        className="last__featured"
      >
        <div className="line line__top">
          <div className="line__one">{featuredHomeLast.lineOne}</div>
          <div className="line__two line__two--fix">
            {featuredHomeLast.lineTwo}
          </div>
          <a
            href={featuredHomeLast.linkTo}
            className="login__button login__bold link__btn"
          >
            {featuredHomeLast.linkTitle}
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="home home__container">
      <Slideshow />
      <SecondSlideShow />
    </div>
  );
};

export default Home;
