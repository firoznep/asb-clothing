import React from 'react';
import '../../styles/cart-dropdown.scss';
import CustomButton from '../Button';

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton colorInverted>Go To CheckOut</CustomButton>
    </div>
  );
};

export default CartDropdown;
