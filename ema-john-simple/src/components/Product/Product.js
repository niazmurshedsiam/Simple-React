import React from "react";
import "./Product.css";
const Product = (props) => {
//   console.log(props.product.name);
  const {img,name,seller,price,stock} = props.product;

  return (
    <div className="products-container">
      <div className="image-container">
        <img src={img} alt="" />
      </div>
      <div className="product-details">
        <h3>{name}</h3>
        <p><small>by: {seller}</small></p>
        <p>${price}</p>
        <p><small>Only {stock} left in stock -- Order soon</small></p>
      </div>
    </div>
  );
};

export default Product;
