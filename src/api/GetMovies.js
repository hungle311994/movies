import { api, API_KEY } from "./api";

export const getTrendingMovies = () => {
  return api("GET", `trending/movie/day?api_key=${API_KEY}`, null);
};

export const getTopRatedMovies = () => {
  return api(
    "GET",
    `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    null
  );
};

export const getPopularMovies = (page) => {
  return api(
    "GET",
    `movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
    null
  );
};

export const getSearchMoviesList = (keyWords, page) => {
  return api(
    "GET",
    `search/movie?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false&query=${keyWords}`,
    null
  );
};

export const getMoviesDetail = (movieID) => {
  return api("GET", `movie/${movieID}?api_key=${API_KEY}&language=en-US`, null);
};

export const getSimilarMovies = (movieID) => {
  return api(
    "GET",
    `movie/${movieID}/similar?api_key=${API_KEY}&language=en-US&page=1`,
    null
  );
};

export const getMoviesVideos = (movieID) => {
  return api(
    "GET",
    `movie/${movieID}/videos?api_key=${API_KEY}&language=en-US`,
    null
  );
};
