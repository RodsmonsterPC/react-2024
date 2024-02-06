import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.scss";
import Search from "../Resources/icons8-lupa.svg";
import Car from "../Resources/icons8-agregar-a-carrito-de-compras-50.png";

function Navbar() {
  return (
    <div>
      <nav className="containerNav">
        <div>
          <Link to="/">Logo</Link>
          <Link>Home</Link>
          <Link>Shop</Link>
          <Link>About Us</Link>
          <Link>Blog</Link>
          <Link>Contact Us</Link>
        </div>
        <div className="loginSearch">
          <Link to="/login">Login</Link>
          <img src={Search} alt="" />
          <img src={Car} alt="" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
