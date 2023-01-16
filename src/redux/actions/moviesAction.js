import { getTopRatedMovies } from "../../api/GetTopRatedMovies";
import { getTrendingMovies } from "../../api/GetTrendingMovies";
import { getTopRatedTV } from "../../api/GetTopRatedTV";
import {
  GET_POPULAR_MOVIES,
  GET_POPULAR_TV,
  GET_TOP_RATED_MOVIES,
  GET_TOP_RATED_TV,
  GET_TRENDING_MOVIES,
  GET_TRENDING_TV,
  SET_MOVIES_DETAIL,
} from "../types";
import { getTrendingTV } from "../../api/GetTrendingTV";
import { getPopularMovies } from "../../api/GetPopularMovies";
import { getPopularTV } from "../../api/GetPopularTV";

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

// Trending TV
export const actionFetchTrendingTVListAPI = () => {
  return async (dispatch) => {
    const res = await getTrendingTV();
    dispatch(actionFetchTrendingTVList(res.data.results));
  };
};

export const actionFetchTrendingTVList = (trendingTVListAPI) => {
  return {
    type: GET_TRENDING_TV,
    payload: trendingTVListAPI,
  };
};

// Top rated TV
export const actionFetchTopRatedTVListAPI = () => {
  return async (dispatch) => {
    const res = await getTopRatedTV();
    dispatch(actionFetchTopRatedTVList(res.data.results));
  };
};

export const actionFetchTopRatedTVList = (topRatedTVListAPI) => {
  return {
    type: GET_TOP_RATED_TV,
    payload: topRatedTVListAPI,
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

// Popular TV
export const actionFetchPopularTVListAPI = (page) => {
  return async (dispatch) => {
    const res = await getPopularTV(page);
    dispatch(actionFetchPopularTVList(res.data.results));
  };
};

export const actionFetchPopularTVList = (popularTVListAPI) => {
  return {
    type: GET_POPULAR_TV,
    payload: popularTVListAPI,
  };
};

// Set Movies Detail
export const actionSetMoviesDetail = (movie) => {
  return {
    type: SET_MOVIES_DETAIL,
    payload: movie,
  };
};
