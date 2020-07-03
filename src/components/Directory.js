import React from 'react';
import MenuItem from './MunuItem';
import { SECTIONS } from '../data/directory.data';
import '../styles/directory.scss';

class Directory extends React.Component {
  state = {
    sections: SECTIONS,
  };
  render() {
    return (
      <div className="directory">
        {this.state.sections.map(({ id, title, imageUrl, size }) => (
          <MenuItem
            key={id}
            title={title.toUpperCase()}
            style={{ backgroundImage: `url(${imageUrl})` }}
            large={size}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
