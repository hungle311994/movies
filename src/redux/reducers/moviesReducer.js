import {
  GET_TOP_RATED_MOVIES,
  GET_TRENDING_MOVIES,
  GET_POPULAR_MOVIES,
  SEARCH_MOVIES_LIST,
  GET_MOVIES_DETAIL,
  GET_SIMILAR_MOVIES,
  GET_MOVIES_VIDEOS,
} from "../types";

const initialState = {
  trendingMoviesList: [],
  topRatedMoviesList: [],
  popularMoviesList: [],
  moviesSearchList: [],
  moviesDetail: [],
  similarMoviesList: [],
  moviesVideos: [],
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRENDING_MOVIES:
      return { ...state, trendingMoviesList: action.payload };

    case GET_TOP_RATED_MOVIES:
      return { ...state, topRatedMoviesList: action.payload };

    case GET_POPULAR_MOVIES:
      return { ...state, popularMoviesList: action.payload };

    case SEARCH_MOVIES_LIST:
      return { ...state, moviesSearchList: action.payload };

    case GET_MOVIES_DETAIL:
      return { ...state, moviesDetail: action.payload };

    case GET_SIMILAR_MOVIES:
      return { ...state, similarMoviesList: action.payload };

    case GET_MOVIES_VIDEOS:
      return { ...state, moviesVideos: action.payload };

    default:
      return { ...state };
  }
};
