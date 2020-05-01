import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>My React App</h1>
//     </div>
//   );
// }

class App extends Component {
  // render method is mandatory
  // react calls this method to render something into the DOM (return must be some html code)
  // looks like html but it is jsx automatically traspiled to valid js by build workflow
  render() {
    return (
      <div className="App">
        <h1>My React App</h1>
        <p>This is really working</p>
      </div>
    );
    // Above jsx in return stmt gets compiled into the following and thus React import is mandatory
    // return React.createElement('div',null,'h1','My React App')
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'My React App'))
  }
}

export default App;
