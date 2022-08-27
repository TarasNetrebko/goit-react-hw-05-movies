import axios from 'axios';

const API_KEY = 'a63e37a24373c68ca9ae486468591e7b';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrending = async () => {
  const result = await axios.get(`trending/movie/week?api_key=${API_KEY}`);
  return result.data.results;
};

export const searchMoviesByWord = async (word, page) => {
  const result = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${word}&page=${page}`
  );
  return result.data.results;
};

export const fetchMovieDetails = async id => {
  const result = await axios.get(`movie/${id}?api_key=${API_KEY}`);
  return result.data;
};

export const fetchActorCast = async id => {
  const result = await axios.get(`movie/${id}/credits?api_key=${API_KEY}`);
  return result.data;
};

export const fetchReviews = async id => {
  const result = await axios.get(
    `movie/${id}/reviews?api_key=${API_KEY}&page=1`
  );
  return result.data;
};
