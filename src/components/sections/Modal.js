import React, { useContext } from "react";
import { Guitards } from "../../context/GuitardsProvider";
import { ShoppingCart } from "../../context/ShoppingCartProvider";

import { isGuitardInCart } from "../../utils/utilities";

const Modals = ({ id }) => {
  const [shoppingCart, methods] = useContext(ShoppingCart);
  const [guitards] = useContext(Guitards);

  const guitard = guitards.list.get.find(item => item._id === id);

  const addToCart = e => {
    isGuitardInCart(e.target.dataset.id, shoppingCart.cart.get)
      ? methods.addToQuantity(e.target.dataset.id)
      : methods.addToCart(e.target.dataset.id);
  };

  return (
    <div>
      <div className="modal__container">
        <div className="modal__container--pane">
          <div className="modal__container--header">
            <div className="modal__container--title">
              {guitard.name} - {guitard.woods.name} / {guitard.brand.name}
            </div>
            <div
              className="modal__container--closebutton"
              onClick={() => guitards.modal.set(false)}
            >
              <i className="fa fa-times btn__rotate"></i>
            </div>
          </div>
          <div className="modal__container--body">
            <div className="modal__container--left">
              <div className="image__box">
                <img
                  className="setting-image"
                  src={
                    guitard.images[0]
                      ? guitard.images[0]
                      : "/images/image_not.png"
                  }
                  alt={guitard.name}
                  width="83%"
                />
              </div>
              <div className="image__details">
                <img
                  className="setting-image image__margin"
                  src={
                    guitard.images[1]
                      ? guitard.images[1]
                      : "/images/image_not.png"
                  }
                  alt={guitard.name}
                  width="49%"
                />
                <img
                  className="setting-image"
                  src={
                    guitard.images[2]
                      ? guitard.images[2]
                      : "/images/image_not.png"
                  }
                  alt={guitard.name}
                  width="49%"
                />
              </div>
            </div>
            <div className="modal__container--right">
              <div className="modal__title">{guitard.name}</div>
              <div className="modal__section-1">
                <p className="modal__dummy-text">
                  Cyprum itidem insulam procul a continenti discretam et
                  portuosam inter municipia crebra urbes duae faciunt claram
                  rerum omnium eadem Cyprus ut nullius externi indigens
                  adminiculi indigenis inter municipia crebra
                </p>
              </div>
              <div className="modal__section-2">
                <div className="modal__shipping">
                  <i className="fa fa-truck"></i>
                  <p>
                    {guitard.shipping ? "Free Shipping" : "Charged Shipping"}
                  </p>
                </div>
                <div className="modal__shipping">
                  {guitard.available ? (
                    <span className="product__availability">
                      <i className="fa fa-check"></i>
                    </span>
                  ) : (
                    <span className="product__availability">
                      <i className="fa fa-times"></i>
                    </span>
                  )}
                  <p>
                    {" "}
                    {guitard.available
                      ? "Product Available"
                      : "Product not Available"}
                  </p>
                </div>
              </div>
              <div className="modal__section-3">
                <span className="modal__price">${guitard.price}</span>
              </div>
              <div className="best__buttons modal__cart-btn">
                <div
                  className="best__buttons--left"
                  data-id={guitard._id}
                  onClick={addToCart}
                >
                  add to cart
                </div>
              </div>
              <div className="modal__section-4">
                <div className="modal__spec">
                  <div className="modal__spec--title">Specs:</div>
                  <div className="modal__spec--fret">
                    frets: {guitard.frets}
                  </div>
                  <div className="modal__spec--wood">
                    woods: {guitard.woods.name}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modals;
