import Axios from "axios";

// export default () => {
//   // return statement is mandatory inside reducer
//   // return undefined;
//   // do not access dom elements and modify
//   // return document.querySelector('input');
//   // do not make external calls
//   // return Axios.get('/posts');
//   return 123;
// };

export default (state = [], action) => {
  // do not mutate state
  // state[0] = 'sumit';
  // state.push('sumit');
  // state.pop();

  // use switch opposed to if to make sure that every action is handled
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  }
};

// mutation in js
// const colors = ['red','green']
// colors.push('purple')
// colors array is mutated
// push, pop, assign value to an index

// const names = {name: 'sumit'}
// names.name = 'suman'
// namespace.age = 30

// strings and numbers are immutable in javascript

// be careful when using === for comparision
// how arrays and js objects are compared using ===
// compare the referece in case of array
// numbers = [1,2,3]
// numbers === [1,2,3] gives false