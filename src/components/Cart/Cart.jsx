import React from "react";
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { makeRequest } from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";

import "./Cart.scss";

function Cart({setOpen, open}) {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };
  const stripePromise = loadStripe(
    "pk_test_51MU9uMAafndBGZ2cVpc2xaWoUUxMI08dpIpT8ekxBjT4OWg6gUO9Rt1LWM4Azgb1GEAPJhpnrENIAy00h82ACf50007oHFBnPc"
  );
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="cart">
    <div className="row">
      <h1>Product name</h1>
      <span className="material-icons close-icon" onClick={() => setOpen(!open)}>close</span>
      </div>
      {products?.map((item, index) => (
        <div className="item" key={index}>
          <img
            src={process.env.REACT_APP_UPLOAD_URL + item.img}
            alt="cart-img"
          />
          <div className="details">
            <h1>{item.title}</h1>

            <div className="price">
              {item.quantity} x ${item.price}
            </div>
            <span
              className="material-icons delete"
              onClick={() => dispatch(removeItem(item.id))}
            >
              delete
            </span>
          </div>
        </div>
      ))}
      <div className="total">
        <span>SUB TOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button onClick={handlePayment}>Proceed to Checkout</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
}

export default Cart;
