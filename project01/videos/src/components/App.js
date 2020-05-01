import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('buildings');
  }

  onTermSubmit = async term => {
    console.log(term);
    const response = await youtube.get('/search', {
      params: {
        // q called specifically as suggested by youtube documentation
        q: term
      }
    });

    console.log(response);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    console.log("From App: ",video.snippet.title);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        {/* i have {this.state.videos.length} videos. */}
        {/* <VideoDetail video={this.state.selectedVideo} />
        <VideoList
                // onVideoSelect can be any name
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
        /> */}
        {/* earlier we used the css grid system */}
        {/* now using the semantic-ui built-in grid system (collections -> grid) */}
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
