import React from "react";
import Products from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="banner">
        <h1>Welcome to Our E-Commerce Store</h1>
        <p>Explore our latest collection of products</p>
      </div>
      <div className="product-list">
        <Products />
      </div>
    </div>
  );
}

export default Home;
