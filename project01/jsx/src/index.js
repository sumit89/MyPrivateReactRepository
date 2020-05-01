// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


function getButtonText(){
  return 'click on me';
}

// Create a react component
// const App = function() {
// arrow is ES2015 syntax
// no browser understand jsx
const App = () => {
  const buttonText = { text: 'Click me' };
  const labelText = 'Enter name:';
  const style = { backgroundColor: 'blue', color: 'white' };


// jsx gets converted to javascript code by babel internally
// jsx className in place of class in js
// jsx htmlFor in place of for in js
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={style}>
        {/* {getButtonText()} */}
        {buttonText.text}
        {/* limitation on type of variables that can be called within jsx */}
        {/* array, string, numbers are allowed. object with keys are not allowed*/}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
// root div is definded in index.html under pulic
ReactDOM.render(<App />, document.querySelector('#root'));
