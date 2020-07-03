import React from 'react';
import ShopItem from '../components/ShopItem';
import '../styles/collection-preview.scss';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h2>{title}</h2>
      <div className="preview">
        {items
          .filter((item, id) => id < 4)
          .map(({ id, ...otherProps }) => (
            <ShopItem key={id} {...otherProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
