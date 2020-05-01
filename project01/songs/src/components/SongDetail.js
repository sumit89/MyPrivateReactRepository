import React from 'react';
import { connect } from 'react-redux';

// to work with connect from react-redux
// we can work with functional component as well

// this song props is coming from connect
//const SongDetail = props => {
const SongDetail = ({song}) => {
  //console.log(props);
  // state inside redux store starts as null and thus we need this check
  if (!song) {
    return <div>Select a song</div>;
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
    // <div>SongDetail</div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  console.log(state.selectedSong);
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
