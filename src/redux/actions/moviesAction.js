import {
  getMoviesDetail,
  getPopularMovies,
  getSearchMoviesList,
  getSimilarMovies,
  getTopRatedMovies,
  getTrendingMovies,
} from "../../api/GetMovies";
import {
  getPopularTV,
  getSearchTVList,
  getSimilarTV,
  getTopRatedTV,
  getTrendingTV,
  getTVDetail,
} from "../../api/GetTV";
import {
  GET_POPULAR_MOVIES,
  GET_POPULAR_TV,
  GET_TOP_RATED_MOVIES,
  GET_TOP_RATED_TV,
  GET_TRENDING_MOVIES,
  GET_TRENDING_TV,
  SEARCH_MOVIES_LIST,
  SEARCH_TV_LIST,
  GET_MOVIES_DETAIL,
  GET_SIMILAR_MOVIES,
  GET_TV_DETAIL,
  GET_SIMILAR_TV,
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

// Search Movies Detail
export const actionSearchMoviesListAPI = (keyWords, page) => {
  return async (dispatch) => {
    const res = await getSearchMoviesList(keyWords, page);
    dispatch(actionSearchMoviesDetail(res.data.results));
    console.log(res.data.results);
  };
};

export const actionSearchMoviesDetail = (moviesSearch) => {
  return {
    type: SEARCH_MOVIES_LIST,
    payload: moviesSearch,
  };
};

// Search Movies Detail
export const actionSearchTVListAPI = (keyWords, page) => {
  return async (dispatch) => {
    const res = await getSearchTVList(keyWords, page);
    dispatch(actionSearchTVDetail(res.data.results));
  };
};

export const actionSearchTVDetail = (tvSearch) => {
  return {
    type: SEARCH_TV_LIST,
    payload: tvSearch,
  };
};

// Get Movies Detail List
export const actionGetMoviesDetailListAPI = (movieID) => {
  return async (dispatch) => {
    const res = await getMoviesDetail(movieID);
    dispatch(actionGetMoviesDetailList(res.data));
    console.log(res.data);
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

// Get TV Detail List
export const actionGetTVDetailListAPI = (tvID) => {
  return async (dispatch) => {
    const res = await getTVDetail(tvID);
    dispatch(actionGetTVDetailList(res.data));
    console.log(res.data);
  };
};

export const actionGetTVDetailList = (tvDetailList) => {
  return {
    type: GET_TV_DETAIL,
    payload: tvDetailList,
  };
};

// Get Similar TV
export const actionGetSimilarTVAPI = (tvID) => {
  return async (dispatch) => {
    const res = await getSimilarTV(tvID);
    dispatch(actionGetSimilarTV(res.data.results));
    // console.log(res.data);
  };
};

export const actionGetSimilarTV = (similarTVList) => {
  return {
    type: GET_SIMILAR_TV,
    payload: similarTVList,
  };
};
