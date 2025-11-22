import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { useSearchParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { CartData } from "../Contexts/CartContext";
import { useContext } from "react";
import { motion } from "framer-motion";

function AboutProduct() {
  const [urlPeramiters, setUrlPeramiters] = useSearchParams();
  const [ratingColor, setRatingColor] = useState("");
  const { AddToCart } = useContext(CartData);
  useEffect(() => {
    if (parseInt(urlPeramiters.get("rating")) > 3) {
      setRatingColor("green");
    } else {
      if (
        parseInt(urlPeramiters.get("rating")) > 2 &&
        parseInt(urlPeramiters.get("rating")) < 4
      ) {
        setRatingColor("#D37211");
      } else {
        setRatingColor("#b60505ff");
      }
    }
  }, []);

  return (
    <div className="product-details-container" id="details">
      <img
        src={urlPeramiters.get("image")}
        alt={urlPeramiters.get("title")}
        width={"100px"}
        height={"100px"}
        className="product-details-image"
      />
      <p className="product-details-title">{urlPeramiters.get("title")}</p>
      <p className="product-details-description">
        {urlPeramiters.get("description")}
      </p>
      <p
        className="product-details-ratting"
        style={{ color: `${ratingColor}` }}
      >
        <FaStar></FaStar> {urlPeramiters.get("rating")}{" "}
        <span>({urlPeramiters.get("ratingCount")} Reviews)</span>
      </p>
      <p className="product-details-price">
        {urlPeramiters.get("price")}
        <span>{urlPeramiters.get("currency")}</span>
      </p>
      <motion.div
        initial={{ transform: "translateY(40px)", opacity: 0 }}
        whileInView={{ transform: "translateY(0px)", opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="product-details-footer"
      >
        <p className="product-details-stock">
          Available stock : {urlPeramiters.get("stock")}
        </p>
        <button className="product-details-add-to-cart">Add To Cart</button>
      </motion.div>
    </div>
  );
}

export default AboutProduct;
