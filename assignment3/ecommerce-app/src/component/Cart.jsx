import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart(props) {
  const { toggleCart, cartItems, selectedProducts } = useContext(CartContext);

  return (
    <div className="cart-content" style={{ display: "block" }}>
      <button className="close-button" onClick={toggleCart}>
        Close
      </button>
      <h2>Cart Details</h2>
      <p>Cart Items: {cartItems}</p>
      <div>
        <h3>Selected Products:</h3>
        <ul>
          {selectedProducts.map((product) => (
            <li key={product.id}>
              {product.title} - Quantity: {product.quantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
