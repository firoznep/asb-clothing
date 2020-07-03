import React from 'react';
import SHOP_DATA from '../data/shop.data';
import '../styles/shop-page.scss';
import CollectionPreview from './CollectionPreview';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shop_data: SHOP_DATA,
    };
  }

  render() {
    const { shop_data } = this.state;
    return (
      <div className="shoppage">
        {shop_data.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
