import React from "react";

const UserPurchasesList = _ => {
  return (
    <>
      <div className="login__title">purchase history</div>
      <div className="dashboard__main--details">
        <table>
          <tr>
            <th>Date of purchase</th>
            <th>Product</th>
            <th>Price paid</th>
            <th>Quantity</th>
          </tr>
          <tr>
            <td>Sample 1</td>
            <td>Sample 2</td>
            <td>Sample 3</td>
            <td>Sample 4</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default UserPurchasesList;
