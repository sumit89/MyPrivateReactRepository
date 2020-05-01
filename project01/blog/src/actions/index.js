// lodash is a popular js libray for working for objects and arrays
// check lodash documentation
import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// export const fetchPosts = ()  => {
//   return {
//     type: 'FETCH_POSTS'
//   };
// };

// export const fetchPosts = async () => {
//   const response = await jsonPlaceholder.get('/posts');
//   //this will not work bcoz redux rules of action creator is broken
//   //actions must be plain objects
//   //use custom middleware for async actions
//   //this look like a plain js object with type property but it is not
//   //once it is transpiled to ES2015 
//   //try inside babeljs.io
//   //due to async-await syntax it is changed and returning the requset object when 
//   //the action creator is called for the very first time
//   //and thus not working as expected
//   return {
//     type: 'FETCH_POSTS',
//     payload: response
//   };
// };

// //errors will go away but this will also not work for async action creators
// export const fetchPosts = () => {
//   const promise = jsonPlaceholder.get('/posts');
//   return {
//     type: 'FETCH_POST',
//     payload: promise
//   };
// };
  
// //solution middleware redux-thunk for making api requests
// //no errors but it will not work as expected
// // now adding the redux-thunk in index.js
// export const fetchPosts = () => {
//   // dispatch makes changes to data on redux store
//   return function(dispatch, getState) {
//     const promise = jsonPlaceholder.get('/posts');
//     // when using redux we must not return any action from the inner fucntion
//     // rather call the dispatch manually
//     return {
//       type: 'FETCH_POSTS',
//       payload: promise
//     };
//   };
// };
  
// after automatic dispatch with function from redux-thunk 
// manually dispatch the action (which can be again an object or a function) back into the redux-thunk flow
// and thus it will keep dispatching until it comes a plain js object with type
// and thus finally the store will be updated
  
// //this is great ! it will work
// export const fetchPosts = () => {
//   // with redux-thunk we can make use of async-await
//   // async-await was creating problems with synchronous action creator
//   // once we have redux-thunk async-await will not make any issue
//   // we don't care what inner function returns
//   // we only care for what outer fucntion returns
//   return async function(dispatch, getState) {
//     const response = await jsonPlaceholder.get('/posts');
//     dispatch({ type: 'FETCH_POSTS', payload: response });
//   };
// };

//with little refactoring
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
};

// // memoizing the outer function will not work
// // still making lot of requests
// // return type is fucntion and the same will be returned even after memoization
// export const fetchUser = _.memoize(function(id) {
//   return async function(dispatch) {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({ type: 'FETCH_USER', payload: response.data });
//   };
// });

  // export const fetchUser = function(id) {
  //   // this will also not solve the issue
  //   // a new version of inner function is created every time
  //   // and thus memoization is not going to work over here
  //   return _.memoize(async function(dispatch) {
  //     const response = await jsonPlaceholder.get(`/users/${id}`);
  //     dispatch({ type: 'FETCH_USER', payload: response.data });
  //   });
  // };

// // memoized version of fetchUser
// export const fetchUser = id => dispatch => {
//   // keep the code to be memoized outside the action creator
//   // so that it will not be called every time when action creator will be called
//   _fetchUser(id, dispatch);
// };

// // _fetchUser is private function
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });

// this works fine with a problem
// if a user which is changed and need to refetched again due to some reason
// thus this is not the best solution
// refactored memoized version of fetchUser
// overfetching problem
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });

// only action creator called from our component
// redux thunk calls the action creator with two arguments dispatch and getState
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // manuallly dispatch the resullt of other action creator
  // fetch is async and thus wait for the api request to be completed
  console.log("about to fetch posts");
  await dispatch(fetchPosts());
  console.log("fetched posts");
  // // console.log(getState().posts);
  // // map and uniq used from lodash library
  // const userIds = _.uniq(_.map(getState().posts, 'userId'));
  // console.log(userIds);
  // // await is nor required over here bcoz we don't have any logic to be executed further after this statement
  // // also forEach does not work with async-await syntax
  // userIds.forEach(id => dispatch(fetchUser(id)));
  // // example if we need to wait for the request to complete
  // // await Promise.all(userIds.map(id => dispatch(fetchUser(id))));
  
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    // this is where all chained methods start to execute after value()
    .value();
};


// goto lodash documentation
// open inspect window
// type _ in console it will give f

// const profile = {name:'sumit'}
// _.omit(profile, 'name')
// {}
// profile is not modified


// function getUser(id) {
//   // fetch in inbuilt into the browser for lodash website
// 	fetch(id);
// 	return 'made a request';
// }
// getUser(2);
// "made a request"

// const memoizedGetUser = _.memoize(getUser)
// it returns a new copy of the getUser function which is the memoized version memoizedGetUser
// but it can be called only one time with unique set of arguments
// we can still call it but the original function is not going to be invoked
// instead memoize is going to return whatever we returned previously

// memoizedGetUser(3);
// // makes api calls
// "made a request"

// memoizedGetUser(3);
// // no api call is made
// "made a request"

// if called with same argument with which it was called earlier
// then it returns the same output which was given earlier without making any api calls


