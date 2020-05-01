import axios from 'axios';

// method1
// const searchImages = (term) => {
// }

// pre customized version of axios
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID fd19f802c2989b82e3c91d6c12e8c67867cd3847f67a38ea9bdefedca18bb123'
  }
});
