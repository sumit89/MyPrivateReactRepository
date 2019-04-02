// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
// arrow is ES2015 syntax
const App = () => {
  const buttonText = { text: 'Click me' };
  const labelText = 'Enter name:';
  const style = { backgroundColor: 'blue', color: 'white' };

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={style}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
