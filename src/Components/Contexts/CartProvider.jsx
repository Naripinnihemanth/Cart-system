import { useEffect, useState } from "react";
import ProductsData from "../../assets/products_200.json";
import { CartData } from "./CartContext";
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [suggestedProducts, setSuggestedProducts] = useState([]);
  function addToCart(e) {
    setCart((pre) => [...pre, e]);
  }

  function suggestItems(category) {
    setSuggestedProducts([]);
    ProductsData.products.map((item) => {
      if (item.category === category) {
        setSuggestedProducts((pre) => [...pre, item]);
      }
    });
  }

  useEffect(() => {
    localStorage.setItem("products", [suggestedProducts]);
  }, [suggestedProducts]);

  return (
    <CartData.Provider
      value={{ cart, addToCart, suggestItems, suggestedProducts }}
    >
      {children}
    </CartData.Provider>
  );
}
