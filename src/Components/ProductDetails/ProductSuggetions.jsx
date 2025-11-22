import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { useContext } from "react";
import { CartData } from "../Contexts/CartContext";
import { useSearchParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function ProductSuggetions() {
  const { suggestedProducts, suggestItems, addToCart } = useContext(CartData);
  const [peramsData, setPeramsData] = useSearchParams();
  const [addedItem, setAddedItem] = useState("");
  const [flag, setFlag] = useState(false);
  function hanbleFlag(itemTitle) {
    setAddedItem(itemTitle);
    setFlag(true);
  }

  useEffect(() => {
    const remove = setInterval(() => {
      setFlag(false);
    }, 2000);

    return () => clearInterval(remove);
  }, [flag]);
  useEffect(() => {
    suggestItems(peramsData.get("category"));
  }, []);

  return (
    <div className="product-suggetion-container">
      <h1>Suggested Products </h1>
      {flag ? (
        <motion.div
          initial={{ top: "-30px", opacity: 0.5 }}
          whileInView={{ top: "40px", opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="adding-alert"
        >
          <p>({addedItem}) added to cart</p>
        </motion.div>
      ) : null}

      {suggestedProducts.map((item) => (
        <motion.div
          initial={{ transform: "translateX(100px)", opacity: 0 }}
          whileInView={{ transform: "translateX(0px)", opacity: 1 }}
          key={item.id}
          className="suggested-item"
        >
          <Link
            className="suggested-item-image"
            to={{
              pathname: "/details",
              search: `id=${item.id}&title=${item.title}&description=${item.description}&image=${item.image}&price=${item.price}&currency=${item.currency}&category=${item.category}&rating=${item.rating.rate}&ratingCount=${item.rating.count}&stock=${item.stock}`,
            }}
          >
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              src={item.image}
              alt=""
              width={"100%"}
              height={"100%"}
            />
          </Link>
          <Link
            className="suggested-item-title"
            to={{
              pathname: "/details",
              search: `id=${item.id}&title=${item.title}&description=${item.description}&image=${item.image}&price=${item.price}&currency=${item.currency}&category=${item.category}&rating=${item.rating.rate}&ratingCount=${item.rating.count}&stock=${item.stock}`,
            }}
          >
            <p>{item.title}</p>
          </Link>
          {/* <p className="suggested-item-description">{item.description}</p> */}
          <p className="suggested-item-rating">
            <FaStar></FaStar>
            {item.rating.rate} <span>({item.rating.count})</span>
          </p>
          <p className="suggested-item-price">
            {item.price}
            <span>{item.currency}</span>
          </p>
          <div className="suggeste-item-btn">
            <button
              onClick={() => {
                addToCart(item);
                hanbleFlag(item.title);
              }}
            >
              Add To Cart
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default ProductSuggetions;
