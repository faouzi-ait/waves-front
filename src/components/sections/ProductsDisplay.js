import React, { useContext } from "react";
import { Guitards } from "../../context/GuitardsProvider";
import { ShoppingCart } from "../../context/ShoppingCartProvider";
import { isGuitardInCart } from "../../utils/utilities";
import Modal from "./Modal";

const HomeProductsDisplay = ({ list, title, classfix, classFix_2 }) => {
  const [guitards] = useContext(Guitards);
  const [shoppingCart, methods] = useContext(ShoppingCart);

  const openModalDetail = e => {
    guitards.modal.set(true);
    guitards.guitard.set(e.target.dataset.id);
  };

  const addToCart = e => {
    isGuitardInCart(e.target.dataset.id, shoppingCart.cart.get)
      ? methods.addToQuantity(e.target.dataset.id)
      : methods.addToCart(e.target.dataset.id);
  };

  return (
    <>
      {" "}
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
                    <div
                      className="best__buttons--left"
                      data-id={item._id}
                      onClick={openModalDetail}
                    >
                      view product
                    </div>

                    <div className="best__buttons--right">
                      <i
                        className="fa fa-plus"
                        data-id={item._id}
                        onClick={addToCart}
                      ></i>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <>
                <div className="no__items">
                  <div className="no__items--message">
                    No guitards to display
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {guitards.modal.get && <Modal id={guitards.guitard.get} />}
    </>
  );
};

export default HomeProductsDisplay;
