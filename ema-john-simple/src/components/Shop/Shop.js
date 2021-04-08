import React, { useState } from "react";
import fakeData from "../../fakeData//index";
import Product from "../Product/Product";
import './Shop.css';

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  // console.log(fakeData);
  return (
    <div className="shop-container">
      <div className="product-container">
        {
            products.map(product => <Product product={product} key={product.key}></Product>)
        }
      </div>
      <div className="cart-container">
          <h1>This is Cart</h1>
      </div>
    </div>
  );
};

export default Shop;
