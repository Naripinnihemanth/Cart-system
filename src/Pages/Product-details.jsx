import React from "react";
import AboutProduct from "../Components/ProductDetails/AboutProduct";
import ProductSuggetions from "../Components/ProductDetails/ProductSuggetions";
import "../index.css";
function ProductDetails() {
  return (
    <div className="details-page">
      <AboutProduct></AboutProduct>
      <ProductSuggetions></ProductSuggetions>
    </div>
  );
}

export default ProductDetails;
