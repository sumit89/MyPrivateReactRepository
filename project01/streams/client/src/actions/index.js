import streams from '../apis/streams';
import history from '../history';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from './types';

// export const signIn = () => {
export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

// passing the history object from the component down to the action creator
// but this solution is not super ideal
// export const createStream = (formValues, history) => async (dispatch, getState) => {
export const createStream = formValues => async (dispatch, getState) => {
// export const createStream = formValues => async dispatch => {
  // const response = await streams.post('/streams', formValues);
  const { userId } = getState().auth;
  // attached the userid to identify which user has created the stream
  const response = await streams.post('/streams', { ...formValues, userId });
  dispatch({ type: CREATE_STREAM, payload: response.data });
  // used for programmatic navigation to get the user back root route to show the list of users
  history.push('/');
};

export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams');
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async dispatch => {
  // use patch against put otherwise we will not be able the identify the user and 
  // edit/delete buttons will not be available any more
  const response = await streams.patch(`/streams/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push('/');
};

export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
  history.push('/');
};
