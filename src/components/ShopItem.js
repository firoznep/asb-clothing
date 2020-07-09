import React from 'react';
import '../styles/shop-item.scss';
import CustomButton from './Button';

const ShopItem = ({ id, imageUrl, name, price }) => {
  return (
    <div className="shop-item">
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="bg-image"
      />
      <div className="content">
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <CustomButton> Add To Cart</CustomButton>
    </div>
  );
};

export default ShopItem;
