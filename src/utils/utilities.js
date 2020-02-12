import React from "react";
import { useTabState, usePanelState } from "@bumaga/tabs";
import { Fade } from "react-slideshow-image";
import MainAccount from "../components/pages/dashboard/MainAccount";
import MyAccount from "../components/pages/dashboard/account/MyAccount";

export const resetError = setError => {
  setTimeout(() => {
    setError("");
  }, 4000);
};

/* USER DASHBOARD COMPONENT */
export const Tab = ({ children }) => {
  const { onClick } = useTabState();

  return <p onClick={onClick}>{children}</p>;
};

export const Panel = ({ children }) => {
  const isActive = usePanelState();

  return isActive ? <span>{children}</span> : null;
};

export const dashboardMenu = _ => {
  return (
    <>
      <div className="login__title title--menu">my account</div>
      <div className="dashboard__main--details">
        <ul className="dashboard__menu--list">
          <li>
            <Tab>User Information</Tab>
          </li>
          <li>
            <Tab>My Account</Tab>
          </li>
        </ul>
      </div>
    </>
  );
};

export const dashboardAdminMenu = _ => {
  return (
    <>
      <div className="login__title title--menu admin--menu">Admin</div>
      <div className="dashboard__main--details">
        <ul className="dashboard__menu--list">
          <li>Site Info</li>
          <li>Add Products</li>
          <li>Manage Categories</li>
        </ul>
      </div>
    </>
  );
};

export const dashboardPanel = _ => {
  return (
    <>
      <Panel>
        <MainAccount />
      </Panel>
      <Panel>
        <MyAccount />
      </Panel>
    </>
  );
};

/* HOME COMPONENT */
export const slideImages = [
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

export const featuredHomeLast = {
  url: "/images/featured/featured_home_3.jpg",
  lineOne: "UP TO 40% OFF",
  lineTwo: "IN SECOND HAND GUITARDS",
  linkTitle: "Shop Now",
  linkTo: "/shop"
};

export const properties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    //console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

/* HOME COMPONENT SLIDE SHOW */
export const Slideshow = _ => {
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

export const SecondSlideShow = _ => {
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
