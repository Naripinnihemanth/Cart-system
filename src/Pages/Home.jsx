import React from "react";
import Nav from "../Components/Nav/Nav";
import Products from "../Components/Products/Products";
import { CartProvider } from "../Components/Contexts/CartProvider";
import "../index.css";
function Home({ postData }) {
  return (
    <div className="home">
      <Nav></Nav>
      <Products></Products>
    </div>
  );
}

export default Home;
