import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import SearchInput from "../SearchInput/SearchInput";
import { useLocation } from "react-router-dom";

import "./Navbar.scss";

function Navbar({ setSearchQuery, searchQuery }) {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);
  const [isSearch, setIsSearch] = useState(false);
  const toggleSearch = () => {
    setIsSearch(!isSearch);
  };
  const location = useLocation();
  const isProducts = location.pathname.includes("products");

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link cate" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link cate" to="/products/2">
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
            <Link className="link cate" to="/Coming-Soon">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link cate" to="/Coming-Soon">
              Stores
            </Link>
          </div>

          <div className="icons">
            {isProducts &&
              (isSearch ? (
                <div className="searchContainer">
                  <SearchInput
                    setSearchQuery={setSearchQuery}
                    searchQuery={searchQuery}
                  />
                </div>
              ) : (
                <div className="searchContainer icon">
                  <span
                    className="material-icons"
                    onClick={() => {
                      toggleSearch();
                    }}
                  >
                    search
                  </span>
                </div>
              ))}

            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <span className="material-icons">shopping_cart</span>
              <span className="itemCount">{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart setOpen={setOpen} open={open} />}
    </div>
  );
}

export default Navbar;
