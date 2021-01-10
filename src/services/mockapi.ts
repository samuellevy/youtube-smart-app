import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  params: {
    key: process.env.REACT_APP_YOUTUBE_KEY,
  },
});
