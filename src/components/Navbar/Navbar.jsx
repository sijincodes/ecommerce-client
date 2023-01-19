import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="./../../images/en.png" alt="dollar-img" />
            <span class="material-icons">expand_more</span>
          </div>
          <div className="item">
            <span>USD</span>
            <span class="material-icons">expand_more</span>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">Children</Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">My SHOP</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">About</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className="link" to="/">Stores</Link>
          </div>

          <div className="icons">
            <span class="material-icons">search</span>
            <span class="material-icons">person</span>
            <span class="material-icons">favorite_border</span>
            <div className="cartIcon">
              <span class="material-icons">shopping_cart</span>
              <span className="itemCount">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
