import React, { useState } from "react";
import fakeData from "../../fakeData//index";
import Product from "../Product/Product";
import './Shop.css';

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart,setCart] = useState([]);
  const handleAddProduct = (product)=>{
      console.log('cliked',product);
      const newCount = [...cart,product];
      setCart(newCount);
  }
  // console.log(fakeData);
  return (
    <div className="shop-container">
      <div className="product-container">
        {
            products.map(product => <Product handleAddProduct={handleAddProduct} product={product} key={product.key}></Product>)
        }
      </div>
      <div className="cart-container">
          <h3>Order Summary</h3>
          <h5>Items: {cart.length}</h5>
      </div>
    </div>
  );
};

export default Shop;
