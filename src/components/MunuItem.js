import React from 'react';
import '../styles/menu-item.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, style, large, history, match }) => {
  // console.log(match);
  return (
    <div className={`${large} menu-item`}>
      <div style={style} className="bg-image" />
      <div className="menu-content">
        <h2>{title}</h2>
        <span onClick={() => `${history.push(match.url)}clicked`}>
          Shop Now
        </span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
