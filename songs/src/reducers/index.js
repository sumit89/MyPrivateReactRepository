// why this file is named index.js
// it can be imported without giving the filename bcoz its name is index
// when no filename is given webpack automatically gives index.js file

// defined as named export from redux
// look at the documentation for any third party library
import { combineReducers } from 'redux';

// no props passed into it bcoz it returns static list of songs
const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I Want it That Way', duration: '1:45' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

// default export
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
