import React from 'react';
import '../../styles/cart-dropdown.scss';
import CustomButton from '../Button';
import { connect } from 'react-redux';
import CartItem from './CartItem';

const CartDropdown = ({ addItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {addItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton colorInverted>Go To CheckOut</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { addItems } }) => ({
  addItems,
});

export default connect(mapStateToProps)(CartDropdown);
