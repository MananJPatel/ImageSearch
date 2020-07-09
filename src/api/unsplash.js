import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID faElCJgteWDFn8M9TuPbF0XELO8chPfFGqByuwknEiw'
  }
});