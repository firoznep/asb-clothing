import React from 'react';
import '../../styles/cart-item.scss';

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="checkOut item" />
      <div className="cart-content">
        <span>{name}</span>
        <span>
          {quantity} X Rs.{price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
