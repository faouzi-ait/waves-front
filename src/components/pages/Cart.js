import React, { useEffect, useContext } from "react";
import { UserLogin } from "../../context/LoginProvider";
import { ShoppingCart } from "../../context/ShoppingCartProvider";
// import { Guitards } from "../../context/GuitardsProvider";

import Paypal from "../paypal/Paypal";

const Cart = _ => {
  const [login] = useContext(UserLogin);
  const [shoppingCart, methods] = useContext(ShoppingCart);
  const fromStorage = JSON.parse(localStorage.getItem("wave_shopping-cart"));
  // const [guitards] = useContext(Guitards);

  useEffect(_ => methods.total());

  const totalAftertax =
    methods.taxAmount(shoppingCart.totalPrice.get) +
    shoppingCart.totalPrice.get;

  return (
    <div className="cart">
      {fromStorage.length ? (
        <div className="cart__container">
          <table>
            <thead>
              <tr>
                <th>product name</th>
                <th>description</th>
                <th>wood</th>
                <th>brand</th>
                <th>quantity</th>
                <th>price</th>
              </tr>
            </thead>
            <tbody>
              {fromStorage.map(item => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.woods.name}</td>
                  <td>{item.brand.name}</td>
                  <td>
                    <i
                      className="fa fa-plus-circle"
                      data-id={item._id}
                      onClick={e => methods.addToQuantity(e.target.dataset.id)}
                    ></i>
                    <span className="cart__quantity">{item.quantity}</span>
                    <i
                      className="fa fa-minus-circle"
                      data-id={item._id}
                      onClick={e => methods.minusQuantity(e.target.dataset.id)}
                    ></i>
                  </td>
                  <td>{item.price}</td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>total</td>
                <td>${shoppingCart.totalPrice.get}</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>tax</td>
                <td>{shoppingCart.tax.get}%</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>grand total</td>
                <td>${totalAftertax}</td>
              </tr>
            </tbody>
          </table>
          <div className="checkout__btn">
            {login.isLoggedin.get ? (
              <Paypal />
            ) : (
              "Please login to proceed with the checkout"
            )}
          </div>
        </div>
      ) : (
        <div className="cart__container">Your cart is currently empty</div>
      )}
    </div>
  );
};

export default Cart;
