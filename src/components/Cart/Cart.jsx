import React from "react";

import "./Cart.scss";

function Cart() {
  return (
    <div className="cart">
      <h1>Product name</h1>
      {data?.map((item, index) => (
        <div className="item" key={index}>
          <img src={item.img} alt="cart-img" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0, 100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <span class="material-icons delete">delete</span>
        </div>
      ))}
      <div className="total">
        <span>SUB TOTAL</span>
        <span>$123</span>
      </div>
      <button>Proceed to Checkout</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
}

export default Cart;
