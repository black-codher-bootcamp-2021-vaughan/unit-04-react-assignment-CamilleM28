import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header(props) {
  return (
    <div className="styledHeader">
      <Link to="/" id="homelink" className="link">
        Home
      </Link>

      <Link to="/about" id="aboutlink" className="link">
        About
      </Link>

      <Link to="/basket" id="basketLink" className="productLink">
        Basket [{props.basket.length}]
      </Link>
    </div>
  );
}

export default Header;
