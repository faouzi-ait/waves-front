import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserLogin } from "../../context/LoginProvider";

import { ShoppingCart } from "../../context/ShoppingCartProvider";

const Header = _ => {
  const [shoppingCart, methods] = useContext(ShoppingCart);
  const [login] = useContext(UserLogin);
  let history = useHistory();

  const logout = e => {
    localStorage.removeItem("waves_token");
    localStorage.removeItem("waves_user");
    login.isLoggedin.set(false);
    history.push("/");
  };

  return (
    <div className="header header__container">
      <div className="header__logo">
        <a href="/">waves</a>
      </div>
      <div className="header__links">
        <div className="header__top">
          <div className="header__top--content">
            <a href="/cart" className="login__myacc">
              my cart{" "}
              {shoppingCart.cart.get  && shoppingCart.cart.get.length > 0 &&
                shoppingCart.cart.get.length}
            </a>
            {!login.isLoggedin.get ? (
              <a href="/login">login</a>
            ) : (
              <>
                <a href="/user/dashboard" className="login__myacc">
                  account
                </a>
                <a href="/" onClick={logout}>
                  logout
                </a>
              </>
            )}
          </div>
        </div>

        <div className="header__bottom">
          <div className="header__bottom--content">
            <a href="/">home</a>
            <a href="/guitards">guitards</a>
            <a href="/contact">contact</a>
          </div>
        </div>
      </div>

      <div className="header__extra"></div>
    </div>
  );
};

export default Header;
