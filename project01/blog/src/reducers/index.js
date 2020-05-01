import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  // to get rid of the error
  // dummy: () => '9999',
  posts: postsReducer,
  users: usersReducer
});
