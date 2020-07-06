import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.scss';
import { auth } from '../firebase/firebase.util';

const NavBar = ({ brand, shop, home, signin, currentUser }) => {
  return (
    <div className="navbar-main">
      <Link to="/">{brand}</Link>
      <div className="navbar-options">
        <Link className="option" to="/asb-clothing">
          {home}
        </Link>
        <Link className="option" to="/asb-clothing/shop">
          {shop}
        </Link>
      </div>
      {currentUser ? (
        <div className="signout-content">
          <img
            src={`${currentUser.photoURL}`}
            alt="login icon"
            className="login-icon"
          />

          <div className="option sign-out-btn" onClick={() => auth.signOut()}>
            SignOut
          </div>
        </div>
      ) : (
        <Link className="option sign-in-btn" to="/asb-clothing/signin-signout">
          {signin}
        </Link>
      )}
    </div>
  );
};

export default NavBar;
