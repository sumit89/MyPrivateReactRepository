import React from 'react';

// const context = React.createContext('english');

const Context = React.createContext('english');

// named export thus use curly braces
export class LanguageStore extends React.Component {
  state = { language: 'english' };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }} >
        {this.props.children}
      </Context.Provider>
    );
  }
}

// export default context;

export default Context;

// import LanguageContext
// import {LanguageStore}

// there can be any valid js object in the contex
// export default React.createContext('english');;
