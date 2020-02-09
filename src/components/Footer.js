import React from "react";
import FooterContact from "./sections/Footer_contact";

const Footer = _ => {
  return (
    <div className="footer footer--container">
      <div className="footer__inner--container">
        <div className="footer__title">waves</div>
      </div>

      <div className="footer__secondary">
        <div className="footer__secondary--left">
          <div className="footer__text">Contact Information</div>
          <div className="footer__list-1">
            <div>
              <FooterContact
                icon="fa fa-exchange"
                title="Address"
                text="Kramer 456"
              />
              <FooterContact
                icon="fa fa-clock-o"
                title="Walking Hours"
                text="Weekdays/9am-8pm"
              />
            </div>
            <div>
              <FooterContact
                icon="fa fa-envelope-o"
                title="Email"
                text="joebarne@gmail.com"
              />
              <FooterContact
                icon="fa fa-phone"
                title="Phone"
                text="+33 1 43 98 21 78"
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="footer__secondary--right ">Be the first to know</div>
          <div className="footer__secondary--right secondary--text">
            Get all the latest information on events, sales and offers. You
            can't miss out
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
