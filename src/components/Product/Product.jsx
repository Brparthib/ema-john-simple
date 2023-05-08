import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { handleAddToCart, product } = props;
  const { img, name, price, ratings, seller } = product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="product-text">
        <h4>{name}</h4>
        <p>Price: ${price}</p>
        <span>Manufacturer: {seller}</span>
        <span>Rating: {ratings}</span>
      </div>
      <a onClick={() => handleAddToCart(product)}>
        Add To Cart
        <span className="cartIcon">
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </span>
      </a>
    </div>
  );
};

export default Product;
