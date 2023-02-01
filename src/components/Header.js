import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/image.png";

export const Title = () => {
  <a href="/">
    <img className="logo" alt="logo" src={Logo} />
  </a>;
};
const Header = () => {
  return (
    <>
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
          <Link to="/">
            <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
            <Link to="/cart">
              <li>Cart</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
