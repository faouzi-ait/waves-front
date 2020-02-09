import React from "react";

const Header = _ => {
  return (
    <div className="header header__container">
      <div className="header__logo">waves</div>
      <div className="header__links">
        <div className="header__top">
          <div className="header__top--content">links</div>
        </div>

        <div className="header__bottom">
          <div className="header__bottom--content">links</div>
        </div>
      </div>

      <div className="header__extra"></div>
    </div>
  );
};

export default Header;
