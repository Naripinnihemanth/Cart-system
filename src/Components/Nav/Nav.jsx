import React, { useState, useContext, useEffect } from "react";
import "./Nav.css";
import { FaSearch } from "react-icons/fa";
import { RiShoppingBasketFill } from "react-icons/ri";
import { IoStorefrontSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CartData } from "../Contexts/CartContext";
function Nav() {
  const { cart } = useContext(CartData);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(cart.length);
  }, [cart]);
  return (
    <div className="Navbar">
      <div className="store-logo">
        <IoStorefrontSharp className="store-icon" />
        <p>STORE</p>
      </div>
      <div className="search-bar">
        <input type="text" />
        <div className="search">
          <FaSearch />
        </div>
      </div>
      <Link to={"/cart"} className="cart-icon">
        {count > 0 ? <div className="count">{count}</div> : null}
        <RiShoppingBasketFill />
      </Link>
    </div>
  );
}

export default Nav;
