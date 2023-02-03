import { api, API_KEY } from "./api";

export const getTrendingMovies = () => {
  return api("GET", `trending/movie/day?api_key=${API_KEY}`, null);
};

export const getTopRatedMovies = () => {
  return api("GET", `movie/top_rated?api_key=${API_KEY}&page=1`, null);
};

export const getPopularMovies = (page) => {
  return api("GET", `movie/popular?api_key=${API_KEY}&page=${page}`, null);
};

export const getSearchMoviesList = (page, keyWords) => {
  return api(
    "GET",
    `search/movie?api_key=${API_KEY}&page=${page}&query=${keyWords}`,
    null
  );
};

export const getMoviesDetail = (movieID) => {
  return api("GET", `movie/${movieID}?api_key=${API_KEY}`, null);
};

export const getSimilarMovies = (movieID) => {
  return api("GET", `movie/${movieID}/similar?api_key=${API_KEY}&page=1`, null);
};

export const getMoviesCredits = (movieID) => {
  return api("GET", `movie/${movieID}/credits?api_key=${API_KEY}`, null);
};

export const getMoviesVideos = (movieID) => {
  return api("GET", `movie/${movieID}/videos?api_key=${API_KEY}`, null);
};
