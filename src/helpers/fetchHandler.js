import axios from 'axios';

const API_KEY = 'a63e37a24373c68ca9ae486468591e7b';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrending = async () => {
  const result = await axios.get(`trending/movie/week?api_key=${API_KEY}`);
  return result.data.results;
};
