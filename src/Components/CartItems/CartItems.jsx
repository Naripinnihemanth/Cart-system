import React, { useState, useEffect } from "react";
import { CartData } from "../Contexts/CartContext";
import { useContext } from "react";
import "./CartItems.css";
function CartItems() {
  const { cart } = useContext(CartData);
  const [itemCount, setItemCount] = useState(0);
  const [itemsTotel, setItemsTotel] = useState(0);
  function handleRemove(e) {
    if (cart.includes(e)) {
      cart.splice(cart.indexOf(e), 1);
      setItemCount((pre) => pre - 1);
      setItemsTotel((pre) => pre - e.price);
    }
  }
  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    setItemsTotel(total);
  }, [cart, itemCount]);
  return (
    <div className="cart-item-wrapper">
      {cart.length > 0 ? (
        cart.map((item) => (
          <div className="cart-container" key={item.id}>
            <img
              src={item.image}
              alt="image"
              width="100%"
              height="100%"
              className="cart-item-image"
            />
            <p className="cart-item-title">{item.title}</p>
            <p className="cart-item-price">
              {item.price}
              <span>{item.currency}</span>
            </p>
            <button
              className="cart-item-remove"
              onClick={() => {
                handleRemove(item);
              }}
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <h1 style={{ textAlign: "center", fontFamily: "var(--normal-text)" }}>
          cart empty
        </h1>
      )}
      {cart.length > 0 ? (
        <div className="cart-price-container">
          <h1>Bill</h1>
          {cart.map((item, i) => (
            <div className="item-price" key={item.id}>
              <p className="index">{i + 1}</p>
              <p className="item-title">{item.title}</p>
              <p className="price">{item.price}</p>
            </div>
          ))}
          <div className="total">
            <p className="text">Totel</p>
            <p className="total-amount" style={{ color: "green" }}>
              {itemsTotel}
            </p>
          </div>
          <button className="order-btn" id="btn">
            Order
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default CartItems;
