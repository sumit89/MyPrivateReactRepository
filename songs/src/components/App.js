import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

// functional component bcoz we are making use of redux for state management
// we will avoid using component level state
// however there may be cases to keep state inside redux and inside react components as well
const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
    // <div><SongList /></div>
  );
};

export default App;
