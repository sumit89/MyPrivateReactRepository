import { combineReducers } from 'redux';
// when there are multiple reducers
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer
  // dummy: () => 'sumit'
});
