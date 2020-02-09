import React from "react";

const Footer_contact = ({ icon, title, text }) => {
  return (
    <ul>
      <li className="footer__list--display">
        <div className="footer__list--icon">
          <i className={icon}></i>
        </div>
        <div className="footer__list--details">
          <p className="footer__list--address">{title}</p>
          <p>{text}</p>
        </div>
      </li>
    </ul>
  );
};

export default Footer_contact;
