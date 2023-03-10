import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import { addToCart } from "../../redux/cartReducer";

import "./Product.scss";

function Product() {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  const dispatch = useDispatch();
  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">${data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                <span className="material-icons">remove</span>
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>
                <span className="material-icons">add</span>
              </button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
              <span className="material-icons">shopping_cart</span>Add to Cart
            </button>
            <div className="links">
              <div className="item">
                <span className="material-icons">favorite</span>Add to
                Wishlist
              </div>
            </div>
            <div className="info">
              <span>Vendor: XYZ Corp</span>
              <span>Product Type: Strong EDT</span>
              <span>Tag:Perfume, EDT</span>
            </div>
            <hr />
            <div className="info">
              <span>Lorem Ipsum Lorem Ipsum</span>
              <hr />
              <span>Lorem Ipsum</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Product;
