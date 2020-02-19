import React from "react";

const HomeProductsDisplay = ({ list, title, classfix, classFix_2 }) => {
  return (
    <div className="home__best">
      <div className="home__best--container">
        <div className="home__title">{title}</div>
        <div className={`home__best--items ${classFix_2}`}>
          {list.length > 0 ? (
            list.map((item, i) => (
              <div className={`best__item--card ${classfix}`} key={i}>
                <img
                  src={
                    item.images && item.images.length === 0
                      ? "/images/image_not.png"
                      : item.images[0]
                  }
                  className="best__images setting-image "
                  alt="not found"
                  width="65%"
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
            ))
          ) : (
            <>
              <div className="no__items">
                <div className="no__items--message">No guitards to display</div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeProductsDisplay;
