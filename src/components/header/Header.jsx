/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaUtensils } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="brand">
        <a href="#" className="logo">
          <FaUtensils />
        </a>
        <div>
          <h1 className="main-name">Sass</h1>
          <p className="sub-name">Restaurant</p>
        </div>
      </div>
      <div className="header-banner">
        <h1 className="main-heading">Welcome</h1>
        <h3 className="sub-heading">Try Great Sass Dishes</h3>
        <button type="button" className="main-btn">
          Reservation
        </button>
      </div>
    </header>
  );
};

export default Header;
