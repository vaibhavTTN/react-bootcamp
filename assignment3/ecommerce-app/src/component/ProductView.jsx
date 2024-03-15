import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"; // For accessing URL parameters
import "./productView.css"; // Import the CSS file for styling
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

export const ProductView = () => {
  const { id } = useParams();

  const { productDetails, setProductDetails, fetchProductById } =
    useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  console.log(productDetails);

  useEffect(() => {
    setProductDetails({});
    fetchProductById(id);
  }, [id, fetchProductById]);

  return (
    <div className="product-view">
      <img
        src={productDetails.image}
        alt={productDetails.title}
        className="product-image"
      />
      <div className="product-details">
        <h1 className="product-name">{productDetails.title}</h1>
        <p className="product-description">{productDetails.description}</p>
        <p className="product-price">${productDetails.price}</p>
        <button
          className="add-to-cart-button"
          onClick={() => {
            addToCart(productDetails);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
