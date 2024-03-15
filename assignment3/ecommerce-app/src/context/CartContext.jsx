import React, { useState } from "react";

export const CartContext = React.createContext({
  cartItems: 0,
  isCartOpen: false,
  addToCart: (product) => {},
  toggleCart: () => {},
  selectedProducts: [],
});

export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const toggleCart = () => {
    setIsCartOpen((prevState) => !prevState);
  };

  const addToCart = (product) => {
    const existingProduct = selectedProducts.find((p) => p.id === product.id);
    if (existingProduct) {
      const updatedProducts = selectedProducts.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      );
      setSelectedProducts(updatedProducts);
    } else {
      setCartItems((prevItems) => prevItems + 1);
      setSelectedProducts((prevProducts) => [
        ...prevProducts,
        { ...product, quantity: 1 },
      ]);
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, isCartOpen, addToCart, toggleCart, selectedProducts }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
