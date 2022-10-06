import React from "react";
import { Link } from "react-router-dom";
import HappyHoundLogo from "../assets/hh (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  return (
    <nav>
      <div className="navContainer">
        <div className="Logo">
          <Link to="/">
            <img className="logo" src={HappyHoundLogo} alt="" />
          </Link>
        </div>

        <ul className="navLinks">
          <li className="navList">
            <Link to="/" className="navLink">
              Home
            </Link>
          </li>

          <li className="navList">
            <Link to="/create" className="navLink">
              Create A Product
            </Link>
          </li>

          <li className="navList">
            <Link to="/products" className="navLink">
              Products
            </Link>
          </li>

          <li className="navList">
            <Link to="/" className="navLink">
              <FontAwesomeIcon icon="cart-shopping" />
            </Link>
            <span className="cart__length">2</span>
          </li>

          <li className="navList">
            <Link to="/login" className="navLink">
              Sign In
            </Link>
          </li>
          <li className="navList">
            <Link to="/register" className="navLink">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
