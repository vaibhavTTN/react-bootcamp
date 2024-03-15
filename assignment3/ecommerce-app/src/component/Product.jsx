import React, { useEffect, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Products() {
  const { products, fetchProducts } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  useEffect(fetchProducts, [fetchProducts]);

  return (
    <div className="products">
      {products.map((product) => (
        <Link
          to={`/product/${product.id}`}
          key={product.id}
          className="product"
        >
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>${product.price}</p>
          <button
            onClick={(event) => {
              event.preventDefault();
              addToCart(product);
            }}
          >
            Add to Cart
          </button>
        </Link>
      ))}
    </div>
  );
}
