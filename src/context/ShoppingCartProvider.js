import React, { useState, createContext, useContext } from "react";
import { Guitards } from "./GuitardsProvider";
import { findProductById } from "../utils/utilities";

export const ShoppingCart = createContext();

export const ShoppingCartProvider = props => {
  const [guitards] = useContext(Guitards);
  const [shoppingCart, setShoppingCart] = useState(
    JSON.parse(localStorage.getItem("wave_shopping-cart")) ||
      localStorage.setItem("wave_shopping-cart", JSON.stringify([]))
  );
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [tax, setTax] = useState(15);
  const [selectedItems, setSelectedItems] = useState([]);

  const cartItems = {
    cart: { get: shoppingCart, set: setShoppingCart },
    selected: { get: selectedItems, set: setSelectedItems },
    totalItems: { get: totalCartItems, set: setTotalCartItems },
    totalPrice: { get: totalPrice, set: setTotalPrice },
    tax: { get: tax, set: setTax }
  };

  const methods = {
    addToCart: id => {
      const fromStorage = JSON.parse(
        localStorage.getItem("wave_shopping-cart")
      );

      console.log(id);
      const selectedProduct = findProductById(guitards.list.get, id);

      if (selectedProduct) {
        const addedProduct = {
          ...selectedProduct,
          quantity: 1,
          total: selectedProduct.price
        };

        fromStorage.push(addedProduct);
        const cart = [...cartItems.cart.get, addedProduct];

        localStorage.setItem("wave_shopping-cart", JSON.stringify(fromStorage));
        cartItems.cart.set(cart);
      }
    },
    removeFromCart: id => {
      const fromStorage = JSON.parse(
        localStorage.getItem("wave_shopping-cart")
      );
      const newCart = cartItems.cart.get.filter(item => item._id !== id);
      const product = findProductById(fromStorage, id);
      const index = fromStorage.indexOf(product);

      cartItems.cart.set(newCart);
      fromStorage.splice(index, 1);
      localStorage.setItem("wave_shopping-cart", JSON.stringify(fromStorage));
    },
    addToQuantity: id => {
      const fromStorage = JSON.parse(
        localStorage.getItem("wave_shopping-cart")
      );
      const product = findProductById(fromStorage, id);
      const index = fromStorage.indexOf(product);

      product.quantity = product.quantity + 1;
      product.total = product.quantity * product.price;

      fromStorage.splice(index, 1, product);
      localStorage.setItem("wave_shopping-cart", JSON.stringify(fromStorage));
      methods.total();
    },
    minusQuantity: id => {
      const fromStorage = JSON.parse(
        localStorage.getItem("wave_shopping-cart")
      );
      const product = findProductById(fromStorage, id);
      const index = fromStorage.indexOf(product);

      if (product.quantity >= 1) {
        product.quantity = product.quantity - 1;
        product.total = product.quantity * product.price;

        fromStorage.splice(index, 1, product);
        localStorage.setItem("wave_shopping-cart", JSON.stringify(fromStorage));
        methods.total();
      }

      if (product.quantity === 0) {
        methods.removeFromCart(id);
      }
    },
    clearCart: _ => {
      localStorage.setItem("wave_shopping-cart", JSON.stringify([]));
      cartItems.cart.set([]);
    },
    total: _ => {
      const fromStorage = JSON.parse(
        localStorage.getItem("wave_shopping-cart")
      );
      const tt = fromStorage.map(item => item.total).reduce((a, b) => a + b, 0);
      cartItems.totalPrice.set(tt);
    },
    taxAmount: total => {
      return (total * tax) / 100;
    }
  };

  return (
    <ShoppingCart.Provider value={[cartItems, methods]}>
      {props.children}
    </ShoppingCart.Provider>
  );
};
