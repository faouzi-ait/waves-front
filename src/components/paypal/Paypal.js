import { useState, useEffect /*, useContext */ } from "react";
// import { useHistory } from "react-router-dom";
// import { ShoppingCart } from "../../context/ShoppingCartProvider";

// import axios from "axios";

const MyApp = _ => {
  // const history = useHistory();
  // const [cartItems, methods] = useContext(ShoppingCart);
  const [token, setToken] = useState("");
  // const fromStorage = JSON.parse(localStorage.getItem("wave_shopping-cart"));
  // const userFromStorage = JSON.parse(localStorage.getItem("waves_user"));

  useEffect(
    _ => {
      getToken();
    },
    [token]
  );

  const getToken = async _ => {
    await setToken(localStorage.getItem("waves_token"));
  };

  // const totalToPay =
  //   methods.taxAmount(cartItems.totalPrice.get) + cartItems.totalPrice.get;

  // const onSuccess = payment => {
  //   // Congratulation, it came here means everything's fine!
  //   // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
  //   let date = new Date();
  //   fromStorage.unshift(date.toISOString());

  //   axios
  //     .all([
  //       axios.post(
  //         `${process.env.REACT_APP_BASE_URL}/userHistory/${userFromStorage.id}`,
  //         { shoppingCart: fromStorage },
  //         {
  //           headers: {
  //             Authorization: token
  //           }
  //         }
  //       ),
  //       axios.post(
  //         `${process.env.REACT_APP_BASE_URL}/confirmation/message`,
  //         {
  //           clientMail: userFromStorage.email,
  //           user: userFromStorage,
  //           order: fromStorage,
  //           total: totalToPay
  //         },
  //         {
  //           headers: {
  //             Authorization: token
  //           }
  //         }
  //       )
  //     ])
  //     .then(
  //       axios.spread((history, confirmation) => {
  //         // do something with both responses
  //         console.log(history);
  //         console.log(confirmation);
  //       })
  //     )
  //     .catch(err => console.log(err));

  //   methods.clearCart();
  //   history.push("/");

  //   setTimeout(() => {
  //     history.push("/user/dashboard");
  //   }, 500);
  // };

  // const onCancel = data => {
  //   // User pressed "cancel" or close Paypal's popup!
  //   console.log("The payment was cancelled!", data);
  //   // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
  // };

  // const onError = err => {
  //   // The main Paypal's script cannot be loaded or somethings block the loading of that script!
  //   console.log("Error!", err);
  //   // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
  //   // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
  // };

  // let env = "sandbox"; // you can set here to 'production' for production
  // let currency = "USD"; // or you can set this value from your props or state
  // let total = Number(totalToPay); // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
  // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

  // const client = {
  //   sandbox: process.env.REACT_APP_CLIENT_ID,
  //   production: "YOUR_PRODUCTION_APP_ID"
  // };

  // In order to get production's app-ID, you will have to send your app to Paypal for approval first
  // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
  //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
  // For production app-ID:
  //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/

  // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!

  return (
    // <PaypalExpressBtn
    //   env={env}
    //   client={client}
    //   currency={currency}
    //   total={total}
    //   onError={onError}
    //   onSuccess={onSuccess}
    //   onCancel={onCancel}
    // />
    'Paypal Deprecated'
  );
};

export default MyApp;
