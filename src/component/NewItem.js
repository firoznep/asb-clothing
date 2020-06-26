import React from 'react';

const NewItem = ({ title, url }) => {
  return (
    <div className="new-item">
      <div className="new-item_content rounded">
        <h2 className="content_title text-danger">{title}</h2>
        <span className="btn btn-success px-4">Buy now</span>
      </div>

      <div
        style={{ backgroundImage: `url(${url})` }}
        className="image-background-url"
      ></div>
    </div>
  );
};

export default NewItem;
