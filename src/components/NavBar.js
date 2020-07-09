import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.scss';
import { auth } from '../firebase/firebase.util';
import { connect } from 'react-redux';
import ShoppingBagIcon from './cart/ShoppingBagIcon';
import CartDropdown from './cart/CartDropdown';

const NavBar = ({
  brand,
  shop,
  home,
  signin,
  currentUser,
  toggleCart,
  toggleCartDropdown,
}) => {
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
      <div className="login-container">
        {currentUser ? (
          <div className="signout-content">
            {/* <img
            src={`${currentUser.photoURL}`}
            alt="login icon"
            className="login-icon"
          /> */}
            <span>{`Hi, ${currentUser.displayName} `}</span>
            <div className="option sign-out-btn" onClick={() => auth.signOut()}>
              SignOut
            </div>
          </div>
        ) : (
          <Link
            className="option sign-in-btn"
            to="/asb-clothing/signin-signout"
          >
            {signin}
          </Link>
        )}

        <ShoppingBagIcon />
      </div>
      {toggleCart ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { toggleCart } }) => {
  return {
    currentUser,
    toggleCart,
  };
};

export default connect(mapStateToProps)(NavBar);
