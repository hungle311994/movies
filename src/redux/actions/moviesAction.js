import {
  getMoviesCredits,
  getMoviesDetail,
  getPopularMovies,
  getSearchMoviesList,
  getSimilarMovies,
  getTopRatedMovies,
  getTrendingMovies,
  getMoviesVideos,
} from "../../api/GetMovies";
import {
  GET_POPULAR_MOVIES,
  GET_TOP_RATED_MOVIES,
  GET_TRENDING_MOVIES,
  SEARCH_MOVIES_LIST,
  GET_MOVIES_DETAIL,
  GET_SIMILAR_MOVIES,
  GET_MOVIES_CREDITS,
  GET_MOVIES_VIDEOS,
} from "../types";

// Trending Movies
export const actionFetchTrendingMoviesListAPI = () => {
  return async (dispatch) => {
    const res = await getTrendingMovies();
    dispatch(actionFetchTrendingMoviesList(res.data.results));
  };
};

export const actionFetchTrendingMoviesList = (trendingMoviesListAPI) => {
  return {
    type: GET_TRENDING_MOVIES,
    payload: trendingMoviesListAPI,
  };
};

// Top rated Movies
export const actionFetchTopRatedMoviesListAPI = () => {
  return async (dispatch) => {
    const res = await getTopRatedMovies();
    dispatch(actionFetchTopRatedMoviesList(res.data.results));
  };
};

export const actionFetchTopRatedMoviesList = (topRatedMoviesListAPI) => {
  return {
    type: GET_TOP_RATED_MOVIES,
    payload: topRatedMoviesListAPI,
  };
};

// Popular Movies
export const actionFetchPopularMoviesListAPI = (page) => {
  return async (dispatch) => {
    const res = await getPopularMovies(page);
    dispatch(actionFetchPopularMoviesList(res.data.results));
  };
};

export const actionFetchPopularMoviesList = (popularMoviesListAPI) => {
  return {
    type: GET_POPULAR_MOVIES,
    payload: popularMoviesListAPI,
  };
};

// Search Movies Detail
export const actionSearchMoviesListAPI = (page, keyWords) => {
  return async (dispatch) => {
    const res = await getSearchMoviesList(page, keyWords);
    dispatch(actionSearchMoviesDetail(res.data.results));
  };
};

export const actionSearchMoviesDetail = (moviesSearch) => {
  return {
    type: SEARCH_MOVIES_LIST,
    payload: moviesSearch,
  };
};

// Get Movies Detail List
export const actionGetMoviesDetailListAPI = (movieID) => {
  return async (dispatch) => {
    const res = await getMoviesDetail(movieID);
    dispatch(actionGetMoviesDetailList(res.data));
    // console.log(res.data);
  };
};

export const actionGetMoviesDetailList = (moviesDetailList) => {
  return {
    type: GET_MOVIES_DETAIL,
    payload: moviesDetailList,
  };
};

// Get Similar Movies
export const actionGetSimilarMoviesAPI = (movieID) => {
  return async (dispatch) => {
    const res = await getSimilarMovies(movieID);
    dispatch(actionGetSimilarMovies(res.data.results));
  };
};

export const actionGetSimilarMovies = (similarMoviesList) => {
  return {
    type: GET_SIMILAR_MOVIES,
    payload: similarMoviesList,
  };
};

// Get Movies Credits
export const actionMoviesCreditsAPI = (movieID) => {
  return async (dispatch) => {
    const res = await getMoviesCredits(movieID);
    dispatch(actionMoviesCredits(res.data.cast));
    // console.log(res.data.cast);
  };
};

export const actionMoviesCredits = (moviesCredits) => {
  return {
    type: GET_MOVIES_CREDITS,
    payload: moviesCredits,
  };
};

// Get Movies Videos
export const actionMoviesVideosAPI = (movieID) => {
  return async (dispatch) => {
    const res = await getMoviesVideos(movieID);
    dispatch(actionMoviesVideos(res.data.results));
  };
};

export const actionMoviesVideos = (moviesVideos) => {
  return {
    type: GET_MOVIES_VIDEOS,
    payload: moviesVideos,
  };
};
