import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-c7cdf.firebaseio.com/',
});

export default instance;
