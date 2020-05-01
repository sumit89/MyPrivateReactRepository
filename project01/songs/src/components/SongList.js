import React, { Component } from 'react';
// connect is not a component
import { connect } from 'react-redux';
import { selectSong } from '../actions';

// class SongList extends React.Component {
class SongList extends Component {
  renderList() {

    // this is treated as a normal js function call
    // it cannot be magically wired up with redux
    // thus we should not call any action creator arbitrarily
    // whenever dipatch from redux called then action creator is called returning action object
    // and automatically passed into the redix store
    // calling action creators without dispatch does not update the redux store
    // and thus dispatch must be called with the action
    //selectSong();

    // this return produces a brand new array
    return this.props.songs.map(song => {
      // this return some jsx for the map
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              // when this is called connect function automatically calls the action creator and then calls the
              // dispatch fucntion with the action returned
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props);
    // console.log(this.props.songs);
    return <div className="ui divided list">{this.renderList()}</div>;
    // return <div>SongList</div>
  }
}

//it takes all states from the redux store
// called whenever we run reducers to change state in redux
const mapStateToProps = state => {
  console.log(state);
  // return state;
  return { songs: state.songs };
};


// it tells that we want to get a list of songs out of redux store from the provider
// provider automatically notifies the connect function
// then the connect function passes the list of songs down to the SongList component
// configured connect by passing a function mapStateToProps to tell the provider what data it required
export default connect(
  mapStateToProps,
  // { selectSong: selectSong}
  // ES2015 syntax
  // selectSong is the actionCreator
  // when we pass action creator into the connect function
  // the connect fucntion perform a special operation over the functions inside connect
  // it wrops the functions inside another js fucntion
  // it automatically calls the action creator and gets the action returned
  // then calls the dispatch function automatically with the action in order to update the redux store
  { selectSong }
  // passes selectSong as a prop into the component SongList
  // connect automatically calls the selectSong function
)(SongList);


// function connect() {
//   return function() {
//       return "sumit";
//   }
// }

//connect() does not give any output
//connect()() gives sumit as output
// second set of parenthesis invokes the function returned
