import React, { useEffect, useState } from "react";
import "./Products.css";
import ProductData from "../../assets/products_200.json";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { CartData } from "../Contexts/CartContext";
import { useContext } from "react";
import { motion } from "framer-motion";
function Products() {
  const [data, setData] = useState(ProductData.products);
  const { addToCart } = useContext(CartData);
  return (
    <div className="Products-wrapper">
      {data.map((product) => (
        <motion.div
          initial={{ scale: 0, opacity: 0.4 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          key={product.id}
          className="product"
        >
          <Link
            className="product-image"
            to={{
              pathname: "/details",
              search: `id=${product.id}&title=${product.title}&description=${product.description}&image=${product.image}&price=${product.price}&currency=${product.currency}&category=${product.category}&rating=${product.rating.rate}&ratingCount=${product.rating.count}&stock=${product.stock}`,
            }}
          >
            <img
              src={product.image}
              alt="product image"
              width="100%"
              height="100%"
            />
          </Link>
          <Link
            to={{
              pathname: "/details",
              search: `id=${product.id}&title=${product.title}&description=${product.description}&image=${product.image}&price=${product.price}&currency=${product.currency}&category=${product.category}&rating=${product.rating.rate}&ratingCount=${product.rating.count}&stock=${product.stock}`,
            }}
            className="product-title"
          >
            {product.title}
          </Link>
          <p className="product-ratting">
            <FaStar></FaStar> {product.rating.rate}{" "}
            <span>({product.rating.count})</span>
          </p>
          <p className="product-price">
            {product.price}
            <span>{product.currency}</span>
          </p>
          <p className="product-stock">{product.stock} Items left</p>
          <button
            className="Add-to-cart"
            onClick={() => {
              addToCart(product);
              data[data.indexOf(product)].stock--;
            }}
          >
            Add
          </button>
        </motion.div>
      ))}
    </div>
  );
}

export default Products;
// export const CartData = finalCartItems;
