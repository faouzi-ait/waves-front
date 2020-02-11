import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserLogin } from "../../context/LoginProvider";

const Header = _ => {
  const [login] = useContext(UserLogin);
  let history = useHistory();
  const currentUser = JSON.parse(localStorage.getItem("waves_user"));

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
            {!login.isLoggedin.get ? (
              <a href="/login">login</a>
            ) : (
              <>
                <span className="login__username">
                  {currentUser && currentUser.name}
                </span>
                <a href="/" onClick={logout}>
                  logout
                </a>
              </>
            )}
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
