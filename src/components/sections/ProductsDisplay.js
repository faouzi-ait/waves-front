import React from "react";

const HomeProductsDisplay = ({ list, title, classfix, classFix_2 }) => {
  return (
    <div className="home__best">
      <div className="home__best--container">
        <div className="home__title">{title}</div>
        <div className={`home__best--items ${classFix_2}`}>
          {list.map((item, i) => (
            <div className={`best__item--card ${classfix}`} key={i}>
              <img
                src="/images/image_not.png"
                className="best__images"
                alt="not found"
              />
              <span className="best__name">{item.name}</span>
              <span className="best__code">
                {item.woods.name} / {item.brand.name}
              </span>
              <span className="best__price">${item.price}</span>
              <div className="best__buttons">
                <div className="best__buttons--left">view product</div>
                <div className="best__buttons--right">
                  <i className="fa fa-lock"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeProductsDisplay;
