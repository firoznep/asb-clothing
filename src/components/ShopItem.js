import React from 'react';
import '../styles/shop-item.scss';
import CustomButton from './Button';
import { connect } from 'react-redux';
import { addItem } from '../reducers/cart/cartAction';

const ShopItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
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
      <CustomButton onClick={() => addItem(item)}> Add To Cart</CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ShopItem);
