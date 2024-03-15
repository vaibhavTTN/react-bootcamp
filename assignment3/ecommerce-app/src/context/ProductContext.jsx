import React, { useCallback, useState } from "react";

export const ProductContext = React.createContext({
  products: [],
  fetchProducts: () => {},
  fetchProductById: () => {},
  productDetails: {},
  setProductDetails: (productDetails) => {},
});

export const ProductContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [productDetails, setProductDetails] = useState([]);

  const fetchProducts = useCallback(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const fetchProductById = useCallback((id) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProductDetails(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        productDetails,
        fetchProducts,
        fetchProductById,
        setProductDetails,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
