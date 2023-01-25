import React from "react";

import "./Cart.scss";

function Cart() {
  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1578681994827-a9776963799c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      img2: "https://images.unsplash.com/photo-1578681995025-03f3927ac671?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      title: "Long Sleeve T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 14,
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1578682442805-c592c161ccd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      img2: "https://images.unsplash.com/photo-1578682442805-c592c161ccd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      title: "Aqua Sleeve T-shirt",
      isNew: false,
      oldPrice: 15,
      price: 9,
    },
  ];
  return (
    <div className="cart">
      <h1>Product name</h1>
      {data?.map((item, index) => (
        <div className="item" key={index}>
          <img src={item.img} alt="cart-img" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
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
