import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
// defualt export and thus curly braces not required
// reducers can be of any name
import reducers from './reducers';

ReactDOM.render(
  // Provider is technically a component by react-redux
  // it must be at the top of the hierarchy
  // store passed as a prop
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
