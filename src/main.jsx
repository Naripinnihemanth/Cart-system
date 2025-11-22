import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/Product-details";
import Cart from "./Pages/Cart";
import Error from "./Pages/Error";
import { CartProvider } from "./Components/Contexts/CartProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route Component={Error} path="*"></Route>
          <Route Component={Home} path="/"></Route>
          <Route Component={ProductDetails} path="/details"></Route>
          <Route Component={Cart} path="/Cart"></Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
