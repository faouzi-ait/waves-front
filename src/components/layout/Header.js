import React from "react";

const Header = _ => {
  return (
    <div className="header header__container">
      <div className="header__logo">
        <a href="/">waves</a>
      </div>
      <div className="header__links">
        <div className="header__top">
          <div className="header__top--content">
            <a href="/login">login</a>
          </div>
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
