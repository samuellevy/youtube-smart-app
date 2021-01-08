import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_YOUTUBE_API_BASE,
});
