import React from 'react';
// convention to keep 3rd party imports above user defined files
import axios from 'axios';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  };

  // //async onSearchSubmit(term) {
  //   onSearchSubmit = async term => {
  //   console.log(term);
  //   // this is an asynchronous call which will take some amount of time
  //   const response = await axios.get('https://api.unsplash.com/search/photos', {
  //     params: {query: term},
  //     headers: {
  //       Authorization: 'Client-ID fd19f802c2989b82e3c91d6c12e8c67867cd3847f67a38ea9bdefedca18bb123'
  //     }
  //   });
  //   // .then(response => {
  //   //   console.log(response.data.results);
  //   // });
  //   console.log(response.data.results);
  //   this.setState({ images: response.data.results });
  // }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        {/* onSubmit can be replaced by any name */}
        {/* <SearchBar myFormSubmit={this.onSearchSubmit} /> */}
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
