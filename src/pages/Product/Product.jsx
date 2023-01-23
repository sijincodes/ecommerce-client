import React, { useState } from "react";

import "./Product.scss";

function Product() {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={(images = [0])} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$220</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste,
          fugiat, natus voluptas odio ab exercitationem illum porro minima vel
          ex laborum a pariatur eius quod sit sapiente eligendi necessitatibus
          consequuntur.
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <span class="material-icons">shopping_cart</span>Add to Cart
        </button>
        <div className="links">
          <div className="item">
            <span class="material-icons">shopping_cart</span>Add to Wishlist
          </div>
          <div className="item">
            <span class="material-icons">compare</span>Add to Compare
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
}

export default Product;
