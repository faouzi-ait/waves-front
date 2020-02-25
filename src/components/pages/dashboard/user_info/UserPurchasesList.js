import React, { useState, useEffect, useContext } from "react";
import { UserLogin } from "../../../../context/LoginProvider";

import axios from "axios";

const UserPurchasesList = _ => {
  const [login] = useContext(UserLogin);
  const [userHistory, setUserHistory] = useState({});

  useEffect(_ => {
    const getUser = async id => {
      return await axios.get(`${process.env.REACT_APP_BASE_URL}/user/${id}`, {
        headers: {
          Authorization: login.token.get
        }
      });
    };

    getUser(login.user.get.id)
      .then(res => setUserHistory(res.data.user.history))
      .catch(err => console.log(err));
  }, []);

  console.log(userHistory);

  return (
    <>
      <div className="login__title text__centered">purchase history</div>
      <div className="dashboard__main--details">
        <div className="history__layout">
          {userHistory.length ? (
            userHistory.map((item, i) => (
              <>
                <div className="history__date" key={i}>
                  {item[0].split("T")[0]}
                </div>
                {item.map((order, a) => (
                  <div key={a} className="history__order text__centered">
                    <div>{order.name}</div>
                    <div>{order.description}</div>
                    <div>{order.price && `$${order.price}`}</div>
                    <div>{order.quantity}</div>
                  </div>
                ))}
              </>
            ))
          ) : (
            <div className="text__centered">No order in your history</div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserPurchasesList;
