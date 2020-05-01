import React from 'react';
import './App.css';

import {Component} from 'react';

class App extends Component {
  render() {
    return (
      <div>This div has been clicked {this.props.clicks} times</div>
    );
  }
}

export default App;
