import axios from 'axios';

const KEY = 'AIzaSyDUSDA-RvdifkBOQWNjDbbs-OeWe7BfZBg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
    // no need to pre configure the query
  }
});
