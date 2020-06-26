import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.scss';
import Directory from './component/Directory';

class App extends React.Component {
  render() {
    return (
      <div>
        <Directory />
      </div>
    );
  }
}

export default App;
