import React from "react";

import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
         
          <span>Classics</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis, praesentium? Saepe hic sequi numquam reprehenderit
            nobis ex accusantium dolorem, eum impedit pariatur rem soluta, fuga,
            tempore aliquam debitis blanditiis? Ducimus.
          </span>
        </div>
        <div className="item">
        <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis, praesentium? Saepe hic sequi numquam reprehenderit
            nobis ex accusantium dolorem, eum impedit pariatur rem soluta, fuga,
            tempore aliquam debitis blanditiis? Ducimus.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span  className="logo">parfum</span>
          <span className="copyright"> © Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="./../../images/payment.png" alt="payment-img" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
