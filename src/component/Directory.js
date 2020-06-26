import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewItem from './NewItem';

class Directory extends React.Component {
  state = {
    images: [
      {
        id: uuidv4(),
        imageUrl: 'https://picsum.photos/id/200/800',
        title: 'hat',
      },
      {
        id: uuidv4(),
        imageUrl: 'https://picsum.photos/id/1011/800',
        title: 'shirt',
      },
      {
        id: uuidv4(),
        imageUrl: 'https://picsum.photos/id/100/800',
        title: 'suit',
      },
      {
        id: uuidv4(),
        imageUrl: 'https://picsum.photos/id/237/800',
        title: 'sari',
      },
      {
        id: uuidv4(),
        imageUrl: 'https://picsum.photos/id/1/800',
        title: 'baniyan',
      },
    ],
  };
  render() {
    return (
      <div className="new-item-container">
        {this.state.images.map(({ title, id, imageUrl }) => (
          <NewItem key={id} title={title} url={imageUrl} />
        ))}
      </div>
    );
  }
}

export default Directory;
