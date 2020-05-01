import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case 'UPDATE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      // {
      //   id: 1,
      //   name: 'dfsfsdf',
      //   email: 'sffsfsfsf',
      //   phone: 'sdfsfsfsdf',
      // },
      // {
      //   id: 2,
      //   name: 'khkhk',
      //   email: 'fghfghf',
      //   phone: 'hjkhjkhk',
      // },
      // {
      //   id: 3,
      //   name: 'rtyryr',
      //   email: 'rtyrtyrtyr',
      //   phone: 'yrtyrtyrtyr',
      // },
    ],
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };

  // componentWillMount() {
  //   console.log('componentWillMount');
  // }

  // componentDidMount() {
  //   console.log('componentDidMount');
  //   axios.get('https://jsonplaceholder.typicode.com/users').then((res) =>
  //     this.setState({
  //       contacts: res.data,
  //     })
  //   );
  // }
  // for non arrow funciton use async at the front
  async componentDidMount() {
    console.log('componentDidMount');
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    // await - wait for it to finish
    this.setState({ contacts: res.data });
  }

  // componentWillUpdate() {
  //   console.log('componentWillUpdate');
  // }
  // componentDidUpdate() {
  //   console.log('componentDidUpdate');
  // }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
