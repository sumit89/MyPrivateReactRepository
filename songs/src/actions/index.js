
// why this file is named index.js
// it can be imported without giving the filename bcoz its name is index
// when no filename is given webpack automatically gives index.js file

// Action creator
export const selectSong = song => {
  // Return an action
  return {
    // mandatory property
    type: 'SONG_SELECTED',
    // optional property
    payload: song
  };
};

// to named export for multiple different functions
// use export with the function rather than using
// export default xyz
// import {selectSong} from ../actions
// use curly braces for importing named exports
// don't use curly braces for importing default exports
