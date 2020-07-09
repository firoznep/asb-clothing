import React from 'react';
import { ReactComponent as Icon } from '../../assets/shoppingBagIcon/shopping-bag.svg';

import '../../styles/shopping-bag-icon.scss';
import { cartAction } from '../../reducers/cart/cartAction';
import { connect } from 'react-redux';

const ShoppingBagIcon = ({ cartAction }) => {
  return (
    <div onClick={cartAction} className="shopping-bag-icon-container">
      <Icon className="icon" />
      <span className="item">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  cartAction: () => dispatch(cartAction()),
});

export default connect(null, mapDispatchToProps)(ShoppingBagIcon);
