import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.scss';

const NavBar = ({ brand, shop, home, signin, collectionPreview }) => {
  return (
    <div className="navbar-main">
      <Link to="/">{brand}</Link>
      <div className="navbar-options">
        <Link to="/asb-clothing">{home}</Link>
        <Link to="/asb-clothing/shop">{shop}</Link>
      </div>

      <Link to="/asb-clothing/signin">{signin}</Link>
    </div>
  );
};

export default NavBar;
