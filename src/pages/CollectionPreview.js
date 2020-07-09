import React from 'react';
import ShopItem from '../components/ShopItem';
import '../styles/collection-preview.scss';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h2>{title}</h2>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <ShopItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
