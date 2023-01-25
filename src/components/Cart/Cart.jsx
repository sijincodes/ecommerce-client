import React from "react";
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { makeRequest } from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";

import "./Cart.scss";

function Cart() {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };
  return (
    <div className="cart">
      <h1>Product name</h1>
      {products?.map((item, index) => (
        <div className="item" key={index}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="cart-img" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">{item.quantity} x ${item.price}</div>
          </div>
          <span className="material-icons delete" onClick={()=>dispatch(removeItem(item.id))}>delete</span>
        </div>
      ))}
      <div className="total">
        <span>SUB TOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button>Proceed to Checkout</button>
      <span className="reset" onClick={()=>dispatch(resetCart())}>Reset Cart</span>
    </div>
  );
}

export default Cart;
