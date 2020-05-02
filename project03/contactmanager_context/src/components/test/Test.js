import React, { Component } from 'react';

export default class Test extends Component {
  // state = {
  //   test: 'test',
  // };
  state = {
    title: '',
    body: '',
  };
  // no arrow function required as its a lifecycle method

  // // react17 UNSAFE_componentWillMount() {
  // componentWillMount() {
  //   console.log('componentWillMount');
  // }
  componentDidMount() {
    // http calls to an api to backend
    // fetching data within component and storing in component state
    // ajax calls
    // console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      // .then((json) => console.log(json));
      .then((json) =>
        this.setState({
          title: json.title,
          body: json.body,
        })
      );
  }
  // // react17 UNSAFE_componentWillUpdate() {
  // componentWillUpdate() {
  //   console.log('componentWillUpdate');
  // }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  // // react17 UNSAFE_componentWillReceiveProps(nextProps, nextState) {
  // componentWillReceiveProps(nextProps, nextState) {
  //   // deprecated bcoz it works against async nature of react
  //   // executed when a component recieve new properties
  //   // usually used with redux when you have application level state in redux
  //   // take it into a single component and map it as props
  //   // turn a state into component props
  //   // new one is getDerivedStateFromProps
  //   console.log('componentWillReceiveProps');
  //   console.log(nextProps, nextState);
  // }

  // static getDerivedStateFromProps(nextProps, nextState) {
  //   console.log('getDerivedStateFromProps');
  //   console.log(nextProps, nextState);
  //   // return state from here
  //   return { test: 'something' };
  // }
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   // called before dom is updated
  //   console.log('getDerivedStateFromProps');
  //   console.log(prevProps, prevState);
  //   return null;
  // }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>Test Component</h1>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}
