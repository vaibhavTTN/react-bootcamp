import React from "react";
import { Link } from "react-router-dom";

export default function MainNavigation() {
  return (
    <div className="container">
      <nav className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
