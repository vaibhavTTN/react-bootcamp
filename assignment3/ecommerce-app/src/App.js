import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./component/Product";
import "./App.css";
import Cart from "./component/Cart";
import Home from "./component/Home";
import Main from "./page/Main";
import { ProductView } from "./component/ProductView";

function App() {
  const route = createBrowserRouter([
    {
      path: "",
      element: <Main />,
      children: [
        { index: true, element: <Home /> },
        { path: "products", element: <Products /> },
        { path: "cart", element: <Cart /> },
        { path: "product/:id", element: <ProductView /> },
      ],
    },
  ]);
  return <RouterProvider router={route} />;
}

export default App;
