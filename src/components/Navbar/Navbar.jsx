import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

import "./Navbar.scss";

function Navbar() {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>
        </div>
        <div className="center brand">
          <Link className="link" to="/">
            parfum
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/Coming-Soon">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/Coming-Soon">
              Stores
            </Link>
          </div>

          <div className="icons">
            <span className="material-icons">search</span>

            <span className="material-icons">favorite_border</span>
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <span className="material-icons">shopping_cart</span>
              <span className="itemCount">{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
}

export default Navbar;
